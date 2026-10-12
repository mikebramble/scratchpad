# Scratchpad

**A simple, private, offline plain-text editor with built-in spelling and grammar checking, powered by Harper.**

Write or paste text, fix what gets underlined, press **Copy text**, and paste the result into an
email, a chat app or any other text box.

**Try it:** https://mikebramble.github.io/scratchpad/

Checking is done by [Harper](https://github.com/Automattic/harper), an open-source grammar checker,
compiled to WebAssembly and run entirely inside your browser (a setup hinted to on their website). The interface is Harper's own editor
(the one at [writewithharper.com/editor](https://writewithharper.com/editor)) with additions for
everyday write-then-paste use. There is no account, no subscription and no server: nothing you type
leaves your computer, and the page makes no requests to any other site.

## Features

- Underlines spelling, grammar, punctuation and word-choice problems as you type. Click one for
  suggestions, or work through the list in the sidebar.
- **Copy text** puts the whole text on the clipboard as plain text. Ctrl+C and Ctrl+X give plain
  text too, so nothing odd comes along when you paste into mail or chat.
- Your draft is saved as you type and is still there next time.
- **Add to dictionary** for names and jargon, and **disable rule** for checks you don't want. Both
  can be reviewed and undone in Settings.
- American, British, Canadian, Australian and Indian English.
- Works offline once loaded, and can be installed as an app.

## Using it

Open the link above. **The first visit downloads the grammar engine (about 16 MB)**; after that it
starts in a second or two, with or without a connection.

**Install as an app.** In Edge or Chrome, choose *Install* from the address bar or the browser menu
(under Apps, or Save and share). Scratchpad then opens in its own window with its own taskbar or
dock icon, and works offline. When a new version is published, the app offers to reload.

**Your data.** The draft, dictionary and settings are kept in your browser's local storage for this
site. They are not synced between browsers or devices, and clearing the site's data in your browser
erases them. To keep your dictionary, copy it out of Settings first.

## Running your own copy

The `docs/` folder is the complete, prebuilt site. To host on GitHub Pages:

There is also a single-file version: `npm run build:single` (see below) produces
`dist-single/index.html`, a self-contained file of about 22 MB that runs when opened straight from
disk, with no server at all. It keeps its own draft and dictionary, separate from the hosted site's,
and runs Harper on the page rather than a background thread, so very long texts are less smooth.

## Building from source

Requires [Node.js](https://nodejs.org) 22 or newer.

```
npm install
npm run dev            # live preview at http://localhost:5173
npm run build          # writes the site to docs/
npm run build:single   # writes dist-single/index.html
npm run build:all      # both
npm test               # browser tests against both builds (build them first)
```

`npm test` drives a real browser; the first time, run `npx playwright install chromium`.

| Path | Contents |
| --- | --- |
| `src/App.svelte` | Toolbar, saving, clipboard handling, notifications |
| `src/Settings.svelte` | The settings dialog |
| `src/linter.js` | Starts Harper and applies dialect, dictionary and rule settings |
| `src/sw.template.js` | Service worker that keeps the offline copy |
| `vendor/harper-editor/` | Harper's editor interface, prebuilt |
| `patches/harper-editor.patch` | The changes made to Harper's editor |
| `scripts/update-harper.sh` | Rebuilds `vendor/harper-editor/` from a Harper release |
| `tests/` | Browser tests |
| `docs/` | The built site, committed so GitHub Pages can serve it |

## Updating Harper

Scratchpad uses two parts of Harper, each with its own version number (shown at the bottom of
Settings):

- **The grammar engine** (rules and dictionary) is the [`harper.js`](https://www.npmjs.com/package/harper.js)
  package from npm. To update it, change its version in `package.json`.
- **The editor interface** is not published to npm, so it is built from Harper's GitHub repository:

  ```
  scripts/update-harper.sh v2.12.0     # any Harper release tag
  ```

  This needs bash (Git Bash or WSL on Windows), git and pnpm 10 (`corepack enable`). It takes about
  a minute and does not need Rust.

Harper tags releases on GitHub more often than it publishes `harper.js` to npm, so the interface may
be a release or two ahead of the engine. That works as long as the two share the same API; if they
don't, the script usually stops with type errors and `npm test` catches the rest.

After updating either part: `npm install`, `npm run build:all`, `npm test`, then commit.

`patches/harper-editor.patch` is a small change to Harper's editor component. It adds optional
hooks for adding words to a dictionary, enabling or disabling rules, remembering the font, and
replacing the whole text as an undoable edit. It also stops a loaded draft from counting as an edit,
so pressing Ctrl+Z once too often after reopening can't empty the editor. If a future Harper release
changes those lines, the update script stops at the patch step and the patch needs adjusting.

## Known limitations

- Harper is rule-based. It catches misspellings and many common errors, but it does not understand
  sentences the way large-model checkers do.
- Ignoring a problem or disabling a rule can reveal a second problem on the same words. Harper shows
  one problem per stretch of text, and the next rule in line then gets its turn.
- With two Scratchpad windows open at once, both save to the same draft; the last one changed wins.
- English only.

## Credits and licenses

Spelling and grammar checking, and the editor interface, come from
[Harper](https://github.com/Automattic/harper) by Automattic, licensed under Apache-2.0. Scratchpad
is an independent project and is not affiliated with or endorsed by Automattic.

The license texts for Harper and for the JavaScript libraries and fonts bundled into the app are in
[`docs/THIRD-PARTY-NOTICES.txt`](docs/THIRD-PARTY-NOTICES.txt), which is also linked from Settings
and embedded in the single-file build.
