# Cantonese Jyutping Reader 粵語拼音朗讀器 — SPEC (finished)

## What it is

Paste Traditional Chinese → Jyutping above every character → tap any
character to hear Cantonese TTS. One static HTML file, no server, no login,
no paid API. Works on iOS 16 Safari (pure HTML/CSS/ES5, white background).

## Status

**Finished, 2026-11-10.** `index.html` + `data/jyutping-full.js` (26,989
entries) + `data/jyutping-mini.js` (136-entry fallback) + `tests/test_dict.js`
(34 checks, all passing). Publish-ready: repo `Z88666/cantonese-reader`,
GitHub Pages from root.

Done since the skeleton:

1. **Full dictionary (was the one blocker).** `data/jyutping-full.js`,
   26,989 entries, 546 KB, built by `scripts/build_dict.py` from open
   data — LSHK Jyutping phrase box via OpenVanilla (11,220 chars) +
   CanCLID Rime-Cantonese `jyut6ping3` chars table, CC BY 4.0 (extra
   readings + chars the 2001 LSHK table lacks, e.g. 喐 juk1, 揾 wan3,
   踎 mau1) + the mini dict for a few readings neither source has
   (e.g. 呀 aa3). Polyphonic arrays put the most common Hong Kong
   reading first (curated list in the build script; 21 spot checks pass).
2. **Share-link.** Text is encoded in the URL hash (`#t=...`, updated on
   every render via `history.replaceState`); opening such a link restores
   the text. 「複製分享連結」 copies the link.
3. **Tone-colour toggle.** Optional 1–6 tone colours on the ruby text,
   remembered in localStorage; default off (classic green).
4. Last text is remembered in localStorage (device only, no upload).

## Features (all in index.html)

- Ruby annotation (`<ruby>/<rt>`) — Jyutping above each character
- Polyphonic flag: orange + `*`, tap shows all readings
- Unknown-character flag: grey `?` (never guesses a reading)
- Tap a character → speak that character; 讀全文 → speak whole text
- Copy Jyutping as plain text (`ngo5 nei5 ...`)
- Share link, tone colours, localStorage-only persistence
- No upload, no tracking, works offline once loaded

## Dictionary sources & attribution

- LSHK Jyutping phrase box, via OpenVanilla
  (`openvanilla/openvanilla`, `DataTables/jyutping.cin`):
  "The copyright of the Jyutping phrase box belongs to the Linguistic
  Society of Hong Kong." Notice kept intact in `data/jyutping-full.js`.
- CanCLID Rime-Cantonese `jyut6ping3` chars table, CC BY 4.0
  (`rime/rime-cantonese`, `jyut6ping3.chars.dict.yaml`).
- Jyutping romanisation scheme: Linguistic Society of Hong Kong.
- Full attribution in the page footer and README.md.

## Why this beats the existing tools (differentiation to protect)

- Most Jyutping converters are websites with ads or apps to install; this
  is a single file you can save and open anywhere, including offline.
- Most give you the romanisation only; this one also *speaks* it with the
  device's own Cantonese voice, free, no API key.
- Polyphonic characters are flagged instead of silently picking one.

## Tests

- `node tests/test_dict.js` (34 checks, all passing): every entry matches
  `/^[a-z]+[1-6]$/`; polyphonic arrays non-empty with no duplicates;
  21 common characters spot-checked first-reading (我 ngo5, 你 nei5,
  好 hou2, 食 sik6, 香 hoeng1, 港 gong2, 今 gam1, 日 jat6, 去 heoi3,
  唔 m4, 係 hai6, 嘅 ge3, 大 daai6, 細 sai3, 人 jan4, 中 zung1, 國 gwok3,
  學 hok6, 生 saang1, 年 nin4, 月 jyut6); unknown rate on a 547-char
  Traditional Chinese news paragraph is 0.00% (< 5% required).
- Page logic smoke-tested in Node with a DOM stub: hash restore, render,
  tone toggle, dict status note all verified.
- Manual (still to do on a real phone before announcing): test TTS on
  iOS 16 Safari (voice `yue-Hant-HK` must exist — it does on iOS with
  Cantonese enabled) and open the GitHub Pages link on the iPhone 13 Pro.

## Publish

Same as hk-price-watch: repo `Z88666/cantonese-reader`, GitHub Pages
from root. Single file + data folder, no build step, no workflow needed.
