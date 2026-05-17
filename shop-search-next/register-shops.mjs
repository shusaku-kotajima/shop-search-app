const shops = [
  { name: "健康中華　青蓮", highlightGenre: "中華", highlightName: "えびチャーハン", budget: "1,100円〜", walkMinutes: 10, tags: "中華そば、あっさり、一人でも入りやすい" },
  { name: "杵屋", highlightGenre: "和食", highlightName: "そば&うどん", budget: "980円〜", walkMinutes: 10 },
  { name: "一番どり", highlightGenre: "和食", highlightName: "親子丼", budget: "1,000円〜", walkMinutes: 10 },
  { name: "スペイン坂　鳥幸", highlightGenre: "和食", highlightName: "親子丼", budget: "1,500円〜", walkMinutes: 10, tags: "並ぶので注意！" },
  { name: "越後屋 玄白 総本山", highlightGenre: "和食", highlightName: "サーモンハラス", budget: "950円〜", walkMinutes: 15 },
  { name: "笑壺", highlightGenre: "和食", highlightName: "刺身定食", budget: "1,400円〜", walkMinutes: 10, tags: "並ぶので注意！" },
  { name: "みやび", highlightGenre: "焼肉", highlightName: "ハラミランチ", budget: "1,500円〜", walkMinutes: 15 },
  { name: "きみ勢", highlightGenre: "和食", highlightName: "からあげ", budget: "1080円〜", walkMinutes: 15 },
  { name: "トスカーナ", highlightGenre: "洋食", highlightName: "生パスタ", budget: "1,100円〜", walkMinutes: 10 },
  { name: "もうやんカレー", highlightGenre: "エスニック", highlightName: "カレー食べ放題", budget: "1,280円〜", walkMinutes: 15 },
  { name: "キッチン・ダダ", highlightGenre: "洋食", highlightName: "デミハンバーグ", budget: "1,100円〜", walkMinutes: 15 },
  { name: "つじ半", highlightGenre: "和食", highlightName: "海鮮丼", budget: "1,200円〜", walkMinutes: 12, tags: "並ぶので注意！" },
  { name: "天下一", highlightGenre: "中華", highlightName: "ばかでか餃子", budget: "950円〜", walkMinutes: 12 },
  { name: "金蠍 蕎麦組", highlightGenre: "和食", highlightName: "ごまだれ蕎麦", budget: "1,000円〜", walkMinutes: 10 },
  { name: "鳥とも", highlightGenre: "和食", highlightName: "鶏ひつまぶし", budget: "1,000円〜", walkMinutes: 10 },
  { name: "籠りや", highlightGenre: "和食", highlightName: "定食", budget: "1,200円〜", walkMinutes: 12, tags: "現金のみ！" },
  { name: "とんかつ まるや 神谷町店", highlightGenre: "和食", highlightName: "とんかつ", budget: "1,000円〜", walkMinutes: 10 },
  { name: "文蔵", highlightGenre: "和食", highlightName: "定食", budget: "980円〜", walkMinutes: 12 },
  { name: "やまや", highlightGenre: "和食", highlightName: "明太子食べ放題", budget: "1,400円〜", walkMinutes: 15 },
  { name: "名古屋コーチン弌鳥", highlightGenre: "和食", highlightName: "からあげ定食", budget: "950円〜", walkMinutes: 10 },
  { name: "穴子や 神谷町", highlightGenre: "和食", highlightName: "うなぎ、天ぷら", budget: "1,500円〜", walkMinutes: 10 },
  { name: "チェゴヤ", highlightGenre: "韓国料理", highlightName: "チゲ", budget: "1,000円〜", walkMinutes: 15 },
  { name: "グラン・パ", highlightGenre: "洋食", highlightName: "パスタ", budget: "900円〜", walkMinutes: 15 },
  { name: "地中海 バル libre roppongi", highlightGenre: "洋食", highlightName: "チキン南蛮", budget: "1,000円〜", walkMinutes: 10 },
  { name: "おふぃすごはん きぬ川", highlightGenre: "和食", highlightName: "唐揚げ", budget: "1,100円〜", walkMinutes: 15 },
  { name: "恵比寿かつ彩 アークヒルズ店", highlightGenre: "和食", highlightName: "とんかつ", budget: "1,500円〜", walkMinutes: 10 },
  { name: "BRASSERIE LE VIN", highlightGenre: "洋食", highlightName: "ハンバーグ", budget: "1,500円〜", walkMinutes: 10 },
  { name: "番番", highlightGenre: "和食", highlightName: "チキンカツ", budget: "1,000円〜", walkMinutes: 15 },
  { name: "Fuji 六本木店", highlightGenre: "和食", highlightName: "カツ丼", budget: "1,200円〜", walkMinutes: 15 },
  { name: "なか卯", highlightGenre: "和食", highlightName: "親子丼・うどん", budget: "500円〜", walkMinutes: 15 },
  { name: "MOM&POP'S SPAGHETTI", highlightGenre: "洋食", highlightName: "パスタ", budget: "1,300円〜", walkMinutes: 15 },
  { name: "アジアティーク 虎ノ門店", highlightGenre: "エスニック", highlightName: "カレー・ナン", budget: "1,000円〜", walkMinutes: 10 },
  { name: "大衆クラフトビール酒場 BELLY CRAFT", highlightGenre: "和食", highlightName: "チキン南蛮定食", budget: "1,000円〜", walkMinutes: 10 },
  { name: "the 3rd Burger", highlightGenre: "洋食", highlightName: "ハンバーガー", budget: "1,000円〜", walkMinutes: 10 },
  { name: "天ぷらめし 金子半之助", highlightGenre: "和食", highlightName: "天ぷら", budget: "1,500円〜", walkMinutes: 10 },
  { name: "ソイ六本木", highlightGenre: "エスニック", highlightName: "ガパオライス", budget: "1,000円〜", walkMinutes: 15, tags: "カウンター席" },
  { name: "食工房なかえ", highlightGenre: "和食", highlightName: "カニクリームコロッケ", budget: "1,000円〜", walkMinutes: 15, tags: "13:30以降は喫煙可" },
  { name: "The SHEEP FORCE", highlightGenre: "洋食", highlightName: "ラムバーグステーキ", budget: "1,300円〜", walkMinutes: 15 },
  { name: "麻布十川", highlightGenre: "中華", highlightName: "中華系", budget: "1,400円〜", walkMinutes: 15 },
  { name: "なぽれおん", highlightGenre: "中華", highlightName: "かまたまラーメン", budget: "", walkMinutes: 15, tags: "ニンニク入れたいなら夜" },
  { name: "くまめん", highlightGenre: "中華", highlightName: "熊本ラーメン", budget: "", walkMinutes: 15, tags: "ランチはおにぎり50円で追加" },
  { name: "中華そば田中", highlightGenre: "中華", highlightName: "中華そば・ちゃーしゅーめん", budget: "", walkMinutes: 15 },
  { name: "築地魚よし", highlightGenre: "和食", highlightName: "刺身定食", budget: "", walkMinutes: 15 },
  { name: "ラミーズ六本木", highlightGenre: "洋食", highlightName: "特製ハンバーグ 赤ワインソース", budget: "1,300円", walkMinutes: 15 },
  { name: "Balcony by 6th", highlightGenre: "洋食", highlightName: "パンケーキ、バスクチーズケーキ", budget: "4,000円", walkMinutes: 15, tags: "ランチ制度利用がおすすめ" },
  { name: "ボガマリ・クチーナ・メディテラーネア", highlightGenre: "洋食", highlightName: "ブッフェ", budget: "3,000円", walkMinutes: 15, tags: "ランチ制度利用がおすすめ" },
];

const API_KEY = "MBnQW4roUcWKI9XISGHqAwJpJpfulJ0bWj0k";
const SERVICE_DOMAIN = "v8eg21roa3";

async function registerShop(shop) {
  const res = await fetch(`https://${SERVICE_DOMAIN}.microcms.io/api/v1/shops`, {
    method: "POST",
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shop),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`❌ ${shop.name}: ${err}`);
    return false;
  }

  const data = await res.json();
  console.log(`✅ ${shop.name} (ID: ${data.id})`);
  return true;
}

async function main() {
  console.log(`${shops.length}件の店舗を登録します...\n`);
  let success = 0;
  for (const shop of shops) {
    const ok = await registerShop(shop);
    if (ok) success++;
    await new Promise(r => setTimeout(r, 300));
  }
  console.log(`\n完了: ${success}/${shops.length}件登録成功`);
}

main();
