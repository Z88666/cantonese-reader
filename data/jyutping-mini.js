/* Demo Jyutping dictionary (~130 common characters).
 *
 * Format: { "字": "jyutping" } or { "字": ["reading1", "reading2"] }
 * for polyphonic characters (first entry = most common reading).
 *
 * These are high-frequency characters only, checked against standard
 * Jyutping. Do NOT rely on this file for study or publication — replace it
 * with the full open dataset (see SPEC.md: jyutping.org / CC-Canto data,
 * CC BY-SA) converted to the same format as data/jyutping-full.js; the page
 * loads the full file first when present.
 */
window.JYUTPING_MINI = {
  "我": "ngo5", "你": "nei5", "佢": "keoi5",
  "係": "hai6", "唔": "m4", "好": "hou2", "食": "sik6", "飯": "faan6",
  "今": "gam1", "日": "jat6", "天": "tin1", "去": "heoi3", "嚟": "lai4",
  "返": "faan1", "香": "hoeng1", "港": "gong2", "開": "hoi1", "心": "sam1",
  "人": "jan4", "大": "daai6", "小": "siu2", "中": "zung1", "國": "gwok3",
  "年": "nin4", "月": "jyut6", "山": "saan1", "水": "seoi2", "火": "fo2",
  "木": "muk6", "金": "gam1", "手": "sau2", "口": "hau2", "耳": "ji5",
  "目": "muk6", "生": "sang1", "死": "sei2", "來": "loi4", "出": "ceot1",
  "入": "jap6", "上": "soeng6", "下": "haa6", "地": "dei6", "學": "hok6",
  "校": "haau6", "書": "syu1", "讀": "duk6", "寫": "se2", "講": "gong2",
  "聽": "teng1", "睇": "tai2", "做": "zou6", "有": "jau5", "冇": "mou5",
  "咁": "gam3", "嘅": "ge3", "咗": "zo2", "喺": "hai2", "呢": ["ni1", "ne1"],
  "哋": "dei6", "啦": "laa1", "呀": "aa3", "咩": "me1", "點": "dim2",
  "乜": "mat1", "幾": "gei2", "多": "do1", "少": "siu2", "新": "san1",
  "舊": "gau6", "高": "gou1", "低": "dai1", "快": "faai3", "慢": "maan6",
  "錢": "cin4", "買": "maai5", "賣": "maai6", "平": "peng4", "貴": "gwai3",
  "車": "ce1", "路": "lou6", "屋": "uk1", "企": "kei5", "坐": "zo6",
  "早": "zou2", "晚": "maan5", "晏": "aan3", "夜": "je6", "朝": "ziu1",
  "前": "cin4", "後": "hau6", "左": "zo2", "右": "jau6", "東": "dung1",
  "南": "naam4", "西": "sai1", "北": "bak1", "紅": "hung4", "黃": "wong4",
  "藍": "laam4", "綠": "luk6", "白": "baak6", "黑": "hak1",
  "一": "jat1", "二": "ji6", "三": "saam1", "四": "sei3", "五": "ng5",
  "六": "luk6", "七": "cat1", "八": "baat3", "九": "gau2", "十": "sap6",
  "百": "baak3", "千": "cin1", "萬": "maan6",
  "愛": "oi3", "鍾": "zung1", "意": "ji3", "想": "soeng2", "知": "zi1",
  "識": "sik1", "幫": "bong1", "等": "dang2", "邊": "bin1", "度": "dou6",
  "嘢": "je5", "啲": "di1", "嗰": "go2",
  "行": ["hang4", "haang4"], "長": ["coeng4", "zoeng2"],
  "重": ["cung4", "zung6"], "樂": ["lok6", "ngaau6"],
  "會": ["wui6", "wui2"], "得": ["dak1", "dak6"],
  "著": ["zoek6", "zyu6"], "和": ["wo4", "wo6"]
};
