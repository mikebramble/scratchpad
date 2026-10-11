import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { collectPackages, formatPackages } from './scripts/notices.mjs';

const root = fileURLToPath(new URL('.', import.meta.url));
const read = (path) => readFileSync(join(root, path), 'utf8');
const readJson = (path) => JSON.parse(read(path));

const ENGINE_VERSION = readJson('node_modules/harper.js/package.json').version;
const EDITOR_VERSION = readJson('vendor/harper-editor/package.json').version;

/**
 * Two ways to build the same app:
 *
 *   npm run build         -> docs/          a small static site (GitHub Pages, any web host)
 *   npm run build:single  -> dist-single/   one self-contained .html file that opens from disk
 */
export default defineConfig(({ mode }) => {
	const single = mode === 'single';

	return {
		// Relative paths, so the site works from any folder, e.g. https://you.github.io/scratchpad/
		base: './',
		publicDir: single ? false : 'public',
		plugins: [
			svelte(),
			single ? embedLicenses() : offlineCopy(),
			single && viteSingleFile({ removeViteModuleLoader: true }),
		],
		resolve: {
			alias: {
				'virtual:harper-binary': join(root, single ? 'src/binary-inlined.js' : 'src/binary-file.js'),
			},
		},
		// `npm run dev` only: serve harper.js as it is. Vite's dependency pre-bundling would move
		// its code away from the .wasm file it loads from the folder it sits in.
		optimizeDeps: { exclude: ['harper.js'] },
		define: {
			__ENGINE_VERSION__: JSON.stringify(ENGINE_VERSION),
			__EDITOR_VERSION__: JSON.stringify(EDITOR_VERSION),
			__SINGLE_FILE__: JSON.stringify(single),
		},
		build: {
			target: 'es2022',
			// GitHub Pages can publish the docs/ folder of a repository as-is.
			outDir: single ? 'dist-single' : 'docs',
			emptyOutDir: true,
			// The grammar engine alone is about 16 MB; the size warning is expected.
			chunkSizeWarningLimit: 32000,
			rollupOptions: single
				? {}
				: {
						output: {
							// GitHub Pages ignores files whose names start with "_" unless Jekyll is
							// switched off, so never emit one.
							chunkFileNames: (chunk) => `assets/${chunk.name.replace(/^_+/, '') || 'chunk'}-[hash].js`,
						},
					},
		},
	};
});

/**
 * The license texts for everything bundled into the app. The build removes license comments
 * from the code, so they are shipped as text instead.
 */
function licenseNotices(bundle) {
	const bundled = Object.values(bundle)
		.filter((chunk) => chunk.type === 'chunk')
		.flatMap((chunk) => Object.keys(chunk.modules));

	// The fonts are pulled in by CSS rather than by code, so name them directly.
	const fonts = [
		'@fontsource-variable/inter',
		'@fontsource/atkinson-hyperlegible',
		'@fontsource-variable/jetbrains-mono',
	].map((name) => join(root, 'node_modules', name, 'package.json'));

	// Harper gets one entry of its own, below, instead of one per package.
	const packages = collectPackages([...bundled, ...fonts], ['harper.js', 'harper-editor']);

	return [
		'Scratchpad is built from the open-source software listed below.',
		'Each entry gives the license it is used under and that license in full.',
		'',
		formatPackages([
			{
				name: 'Harper',
				version: `(grammar engine harper.js ${ENGINE_VERSION}, editor interface ${EDITOR_VERSION})`,
				license: 'Apache-2.0',
				url: 'https://github.com/Automattic/harper',
				text:
					'The editor interface is built from Harper\'s source with the small changes in\n' +
					'patches/harper-editor.patch: hooks for a personal dictionary, switching rules off,\n' +
					'remembering the font and replacing the text, and a fix for undo after loading text.\n\n' +
					read('vendor/harper-editor/LICENSE').trim(),
			},
			...packages,
		]),
		read('vendor/harper-editor/THIRD-PARTY-NOTICES.txt'),
	].join('\n');
}

/** Single-file build: carry the license texts inside the page (Settings links to them). */
function embedLicenses() {
	return {
		name: 'scratchpad-embed-licenses',
		apply: 'build',
		transformIndexHtml: {
			order: 'post',
			handler(_html, context) {
				return [
					{
						tag: 'script',
						attrs: { type: 'text/plain', id: 'licenses' },
						children: licenseNotices(context.bundle ?? {}).replaceAll('</script', '<\\/script'),
						injectTo: 'body',
					},
				];
			},
		},
	};
}

/**
 * Site build: adds what a browser needs to install the site as an app and open it offline,
 * namely a link to the web manifest and a service worker that keeps a copy of every file.
 * Also writes the license texts next to the page.
 */
function offlineCopy() {
	let outDir;

	return {
		name: 'scratchpad-offline-copy',
		apply: 'build',
		configResolved(config) {
			outDir = resolve(config.root, config.build.outDir);
		},
		transformIndexHtml() {
			return [
				{ tag: 'link', attrs: { rel: 'manifest', href: './manifest.webmanifest' }, injectTo: 'head' },
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: './icon.svg' }, injectTo: 'head' },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: './icon-192.png' }, injectTo: 'head' },
			];
		},
		generateBundle(_options, bundle) {
			this.emitFile({ type: 'asset', fileName: 'THIRD-PARTY-NOTICES.txt', source: licenseNotices(bundle) });
		},
		closeBundle() {
			const files = listFiles(outDir)
				.map((file) => relative(outDir, file).split('\\').join('/'))
				.filter((file) => file !== 'sw.js' && !file.startsWith('.'))
				.sort();

			// A new version name whenever any file changes, so browsers know to refresh their copy.
			const hash = createHash('sha256');
			for (const file of files) {
				hash.update(file);
				hash.update(readFileSync(join(outDir, file)));
			}
			const version = hash.digest('hex').slice(0, 12);

			writeFileSync(
				join(outDir, 'sw.js'),
				read('src/sw.template.js')
					.replace('__VERSION__', () => version)
					.replace('__FILES__', () => JSON.stringify(['./', ...files], null, '\t')),
			);
		},
	};
}

function listFiles(dir) {
	return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
		entry.isDirectory() ? listFiles(join(dir, entry.name)) : [join(dir, entry.name)],
	);
}
