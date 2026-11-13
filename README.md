# Cantonese Jyutping Reader 粵語拼音朗讀器

**Paste Traditional Chinese → Jyutping above every character → tap any character to hear it in Cantonese. One page, free, no login, works offline.**

**貼上繁體中文,即刻有粵語拼音,㩒任何一個字就聽到廣東話發音。一個網頁,免費、免登入、離線可用。**

## Try it 試下

Open `index.html` in any browser (double-click works, no server needed),
or visit the GitHub Pages site once published.
The default text is `我今日去香港食飯,好開心` — click 標粵語拼音, then tap
any character to hear it, or 讀全文 to hear the whole sentence.

直接用瀏覽器開 `index.html` 就得(唔使伺服器)。㩒「標粵語拼音」,
再㩒任何一個字就聽到嗰個字,㩒「讀全文」就讀成段。

## What it does 功能

- **Full dictionary 完整字典**: 26,989 characters with Jyutping
  (see [Dictionary 字典](#dictionary) below). Unknown characters show
  `?` — the app never guesses a reading.
- **Ruby annotation**: Jyutping above every character.
- **Polyphonic flag**: characters with several readings show in orange
  with `*`; tap one to see all readings (first = most common).
- **Tap to hear**: each character, or the whole text, read aloud with the
  device's own Cantonese voice (`speechSynthesis`, `yue-Hant-HK`). Free,
  no API key.
- **Copy Jyutping**: plain text (`ngo5 nei5 ...`).
- **Examples 例句**: 9 graded example texts (入門 → 挑戰: greetings, eating,
  MTR, shopping, weather, work, news, tongue-twister, kinship tone change)
  — one tap loads the text with full annotation.
- **Pronunciation quiz 讀音測驗**: 10 rounds, pick the Jyutping for the
  character shown (4 options, listen button, score + streak, best score kept
  on the device). Word bank: 87 common characters.
- **Polyphone chooser 多音字自選讀音**: every polyphonic character in the
  current text is listed with all its readings and what each one means
  (行 hang4 行路 vs haang4 銀行, 長 coeng4 vs zoeng2, 樂 lok6 vs ngok6,
  聽 teng1 聽嘢 vs ting1 聽日… — 16 characters explained). Tap a reading to make it that character's
  preferred reading (stored on the device); the ruby text follows at once.
- **Tone change 變調**: reduplicated kinship words change tone — 媽媽 is
  maa4 maa1, 爸爸 baa4 baa1, 哥哥 go4 go1, 弟弟 dai6 dai2, 妹妹 mui6 mui2,
  婆婆 po4 po2 (purple, not the dictionary base tone). The changed readings
  are sandhi forms, not dictionary entries, and the copy-Jyutping output
  uses them too. A 9th example sentence shows all six.
- **Stats 統計 + tone legend 聲調圖例**: character count, known %, polyphone
  and unknown counts, and a 1–6 tone colour key (高平 / 高升 / 中平 /
  低降 / 低升 / 低平).
- **Share link 分享連結**: 「複製分享連結」 copies a link with the text
  in the URL hash (`#t=...`); opening it restores the same text.
- **Tone colours 聲調顏色**: optional 1–6 tone colouring, remembered
  on the device.
- **Private**: text stays on the device (localStorage only). No upload,
  no tracking, no account.

## Dictionary 字典

`data/jyutping-full.js` — 26,989 entries, built by
[`scripts/build_dict.py`](scripts/build_dict.py) from open data:

- **LSHK Jyutping phrase box** (香港語言學學會粵語拼音字表), via
  OpenVanilla — 11,220 characters. "The copyright of the Jyutping
  phrase box belongs to the Linguistic Society of Hong Kong."
- **CanCLID Rime-Cantonese `jyut6ping3` chars table (CC BY 4.0)** —
  extra readings, plus characters the 2001 LSHK table lacks, including
  Hong Kong Cantonese characters such as 喐 juk1, 揾 wan3, 踎 mau1.
- This repo's `data/jyutping-mini.js` for the few readings neither
  source has (e.g. 呀 aa3).

For polyphonic characters the first reading is the most common Hong
Kong reading (curated list in the build script, checked against
standard Cantonese). Rebuild any time with
`python3 scripts/build_dict.py`. The old demo dictionary
(`data/jyutping-mini.js`, 136 characters) is kept as a fallback if the
full file fails to load. Spot-checks in `tests/test_dict.js` cover 41
common characters; one correction from the third pass: 諗 is nam2 first
(colloquial Hong Kong; lam2 is the literary reading, kept second) —
fixed in both the build script's FIRST map and the data file so a
rebuild reproduces it.

Jyutping 方案屬香港語言學學會。拼音只供學習參考,多音字請以字典為準。

## Tests 測試

```sh
node tests/test_dict.js
```

140 checks, all passing: the original 34, plus 30 new — every character in
all 9 example texts is in the dictionary, all 87 quiz-bank entries match the
dictionary's first reading, every poly-note reading exists in the dictionary
(16 characters covered), the override logic (chosen reading first / already
first / unknown ignored / null safe), 4 distinct quiz options including the
correct one, and all new UI hooks present. Plus 15 more in this pass: the
three corrected polyphone notes (樂 ngok6 音樂, 更 gang3 更加, 會 kui2 會計
variant — the old notes were wrong, verified against Wiktionary/CantoDict),
quote escaping in `esc()` (a `"` in the input used to break the `data-ch`
attribute), quotes treated as punctuation, a clear-text button, and honest
clipboard feedback (success is only claimed when the copy actually works). Plus 61 more in the third pass:
a second spot-check batch of 20 high-frequency characters (佢 keoi5, 嘢 je5,
哋 dei6, 噉 gam2, 嗰 go2, 邊 bin1, 飲 jam2, 嚟 lai4, 返 faan1, 同 tung4,
個 go3, 話 waa6, 知 zi1, 要 jiu3, 都 dou1, 就 zau6, 先 sin1, 再 zoi3,
仲 zung6, 琴 kam4 — all first readings correct, no data change needed),
the 諗 nam2-first fix, the 樂 ngaau6 note corrected to 樂昌 (樂山 is
lok6 saan1) and a new 聽 ting1 聽日 note, the six-word tone-change table
(媽媽 maa4 maa1, 爸爸 baa4 baa1, 哥哥 go4 go1, 弟弟 dai6 dai2,
妹妹 mui6 mui2, 婆婆 po4 po2) with render + copy both using it, a
`voiceschanged` listener (iOS Safari loads speech voices asynchronously —
`getVoices()` at load often returns empty), and an automated ES5 guard
that scans the shipped JS for `?.`, `??`, `=>`, template literals,
`const`/`let`, class declarations, spread, and ES6+ APIs
(`Object.assign`, `Array.from`, `includes`, `fetch`, …) so iOS 16 Safari
stays supported. Every entry matches
`/^[a-z]+[1-6]$/`,
polyphonic arrays non-empty, 21 common characters spot-checked
(我 ngo5, 你 nei5, 好 hou2, 食 sik6, 香港 hoeng1 gong2, 今日 gam1 jat6,
去 heoi3, 唔 m4, 係 hai6, 嘅 ge3, 大 daai6, 細 sai3, 人 jan4, 中 zung1,
國 gwok3, 學 hok6, 生 saang1, 年 nin4, 月 jyut6), and the unknown rate
on a 547-character Traditional Chinese news paragraph is **0.00%**.

## Why this, when converters already exist?

- Single page, save it and open it anywhere — most converters are ad
  websites or apps to install.
- It also **speaks**: tap a character and the device's own Cantonese voice
  reads it. No API key, no server, free.
- Polyphonic characters (行、長、重…) are flagged in orange with all
  readings, not silently guessed.

## Tech

Pure HTML/CSS/ES5, white background, iOS 16 Safari safe. TTS via
`speechSynthesis` (`yue-Hant-HK`). No upload, no tracking, no dependencies.

## Licence

MIT. Dictionary data: see [Dictionary 字典](#dictionary) above for
sources and attribution — the LSHK notice is kept in
`data/jyutping-full.js`, and the Rime-Cantonese table is CC BY 4.0.
