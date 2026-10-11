// Everything the app remembers lives in this browser's localStorage, under one prefix.
// Nothing is sent anywhere.

const PREFIX = 'scratchpad:';

export function load(key, fallback) {
	try {
		const raw = localStorage.getItem(PREFIX + key);
		return raw == null ? fallback : JSON.parse(raw);
	} catch {
		// Private windows and locked-down profiles can refuse storage; the app still works without it.
		return fallback;
	}
}

export function save(key, value) {
	try {
		if (value == null) {
			localStorage.removeItem(PREFIX + key);
		} else {
			localStorage.setItem(PREFIX + key, JSON.stringify(value));
		}
		return true;
	} catch {
		return false;
	}
}

/** Read a stored list of strings, dropping anything that is not a non-empty string. */
export function loadStrings(key) {
	const value = load(key, []);
	return Array.isArray(value) ? value.filter((v) => typeof v === 'string' && v !== '') : [];
}
