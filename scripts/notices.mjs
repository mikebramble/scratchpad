// Builds the list of open-source licenses for everything that ends up in the app.
//
// The build strips license comments from the code it bundles, so the notices travel as a
// text file instead. Given the source files that went into a bundle, this finds the npm
// package each one came from and collects that package's license text.
//
// Used two ways:
//   - vite.config.js calls collectPackages()/formatPackages() for the app's own bundle;
//   - scripts/update-harper.sh runs this file directly for the prebuilt Harper editor:
//       node scripts/notices.mjs <out.txt> <modules.json>...

import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, parse } from 'node:path';
import { pathToFileURL } from 'node:url';

const RULE = '='.repeat(78);
const THIN = '-'.repeat(78);
const LICENSE_FILE = /^(licen[sc]e|copying|notice)([.-].*)?$/i;

/** Walk up from a file to the folder of the npm package that owns it. */
function packageRootOf(file) {
	let dir = dirname(file);
	const { root } = parse(dir);

	while (true) {
		const manifest = join(dir, 'package.json');
		if (existsSync(manifest)) {
			try {
				const data = JSON.parse(readFileSync(manifest, 'utf8'));
				// Skip stub manifests inside a package (e.g. dist/package.json with only "type").
				if (typeof data.name === 'string' && typeof data.version === 'string') {
					return { dir, data };
				}
			} catch {
				// Not a manifest we can read; keep walking up.
			}
		}
		if (dir === root) {
			return null;
		}
		dir = dirname(dir);
	}
}

function repositoryUrl(data) {
	const repo = typeof data.repository === 'string' ? data.repository : data.repository?.url;
	if (!repo) {
		return data.homepage ?? '';
	}
	return repo
		.replace(/^git\+/, '')
		.replace(/^git:\/\//, 'https://')
		.replace(/^github:/, 'https://github.com/')
		.replace(/^([\w.-]+\/[\w.-]+)$/, 'https://github.com/$1')
		.replace(/\.git$/, '');
}

/**
 * Turn a list of bundled source files into the packages they belong to.
 * `skip` names packages to leave out (the app itself, and Harper's own workspace packages,
 * which are covered by one Harper entry).
 */
export function collectPackages(files, skip = []) {
	const packages = new Map();

	for (const id of files) {
		// Bundlers add query strings and use NUL-prefixed ids for modules they invent.
		const file = id.split('?')[0];
		if (id.startsWith('\0') || !file.includes('node_modules') || !existsSync(file)) {
			continue;
		}

		const found = packageRootOf(file);
		if (found == null || skip.includes(found.data.name)) {
			continue;
		}

		const key = `${found.data.name}@${found.data.version}`;
		if (packages.has(key)) {
			continue;
		}

		const texts = readdirSync(found.dir)
			.filter((name) => LICENSE_FILE.test(name))
			.sort()
			.map((name) => readFileSync(join(found.dir, name), 'utf8').trim());

		packages.set(key, {
			name: found.data.name,
			version: found.data.version,
			license: typeof found.data.license === 'string' ? found.data.license : 'see text below',
			url: repositoryUrl(found.data),
			text: texts.join('\n\n'),
		});
	}

	return [...packages.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export function formatPackages(packages) {
	return packages
		.map((pkg) =>
			[
				RULE,
				`${pkg.name} ${pkg.version}`,
				[pkg.license, pkg.url].filter(Boolean).join(' - '),
				THIN,
				pkg.text || '(This package ships no separate license file; see the link above.)',
				'',
			].join('\n'),
		)
		.join('\n');
}

// Command-line use: node scripts/notices.mjs <out.txt> <modules.json>...
if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
	const [out, ...lists] = process.argv.slice(2);
	const files = lists.flatMap((list) => JSON.parse(readFileSync(list, 'utf8')));
	const packages = collectPackages(files, [
		'harper-editor',
		'lint-framework',
		'components',
		'harper.js',
		'harper-wasm',
		// Left outside the bundle on purpose; the app's own build accounts for it.
		'svelte',
	]);
	writeFileSync(out, formatPackages(packages));
	console.log(`    ${packages.length} bundled packages: ${packages.map((pkg) => pkg.name).join(', ')}`);
}
