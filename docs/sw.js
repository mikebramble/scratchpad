// Service worker: keeps a copy of the whole app in the browser so it opens without a network.
// This file is generated at build time; edit src/sw.template.js instead.

const VERSION = '299e28768c0d';
const FILES = [
	"./",
	"THIRD-PARTY-NOTICES.txt",
	"assets/atkinson-hyperlegible-latin-400-normal-BrHNak5F.woff2",
	"assets/atkinson-hyperlegible-latin-700-normal-GZI4o3u0.woff2",
	"assets/harper_wasm_slim_bg-C6e6Uio8.wasm",
	"assets/index-ChKpEXB3.js",
	"assets/index-UokWeuJO.css",
	"assets/inter-latin-wght-normal-Dx4kXJAl.woff2",
	"assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2",
	"assets/quill-v-dZfs5K-DJFA0Zpi.js",
	"assets/vite-browser-external-BIHI7g3E.js",
	"icon-192.png",
	"icon-512.png",
	"icon-maskable-512.png",
	"icon.svg",
	"index.html",
	"manifest.webmanifest"
];

// Other sites of yours on the same domain share this storage, so name the cache after this app's address.
const PREFIX = `scratchpad:${self.registration.scope}:`;
const CACHE = PREFIX + VERSION;

self.addEventListener('install', (event) => {
	event.waitUntil(
		(async () => {
			const cache = await caches.open(CACHE);

			await Promise.all(
				FILES.map(async (url) => {
					// Files under assets/ carry a fingerprint of their contents in their name, so any
					// copy of one is correct forever: reuse the one an earlier version saved, or the one
					// the browser just downloaded for the page. That keeps the 16 MB grammar engine
					// from being downloaded more than once. Everything else is checked with the server.
					const fingerprinted = url.startsWith('assets/');
					const kept = fingerprinted ? await caches.match(url) : undefined;
					const response =
						kept ?? (await fetch(new Request(url, { cache: fingerprinted ? 'default' : 'no-cache' })));
					if (!response.ok) {
						throw new Error(`Could not save ${url} for offline use (HTTP ${response.status}).`);
					}
					await cache.put(url, response);
				}),
			);

			// Take over as soon as the copy is complete.
			await self.skipWaiting();
		})(),
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		(async () => {
			for (const name of await caches.keys()) {
				if (name.startsWith(PREFIX) && name !== CACHE) {
					await caches.delete(name);
				}
			}
			await self.clients.claim();
		})(),
	);
});

self.addEventListener('fetch', (event) => {
	const { request } = event;
	if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
		return;
	}

	// Serve the saved copy; fall back to the network for anything that is not part of the app.
	event.respondWith(
		(async () => {
			const cache = await caches.open(CACHE);
			return (await cache.match(request, { ignoreSearch: true })) ?? fetch(request);
		})(),
	);
});
