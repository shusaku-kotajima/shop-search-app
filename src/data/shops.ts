// src/data/shops.ts

export type Shop = {
  id: number;
  name: string;        // 店名
  area: string;        // エリア（例：新宿、渋谷など）
  category: string;    // カテゴリ（例：ラーメン、カフェなど）
  address: string;     // 住所（ざっくりでOK）
  budget: string;      // 予算目安（例：〜1000円、1000〜2000円）
  tags: string[];      // キーワード（例：深夜営業、テイクアウト など）
};

export const shops: Shop[] = [
  {
    id: 1,
    name: "ラーメン太郎",
    area: "渋谷",
    category: "ラーメン",
    address: "東京都渋谷区〇〇1-2-3",
    budget: "〜1000円",
    tags: ["濃厚スープ", "豚骨", "カウンター席"],
  },
  {
    id: 2,
    name: "カフェ桜",
    area: "新宿",
    category: "カフェ",
    address: "東京都新宿区△△4-5-6",
    budget: "1000〜2000円",
    tags: ["スイーツ", "女子会", "電源あり"],
  },
  {
    id: 3,
    name: "焼き鳥 一心",
    area: "恵比寿",
    category: "居酒屋",
    address: "東京都渋谷区□□7-8-9",
    budget: "3000〜4000円",
    tags: ["飲み放題", "個室あり", "喫煙可"],
  },
  {
    id: 4,
    name: "ナポリの窯",
    area: "池袋",
    category: "イタリアン",
    address: "東京都豊島区◇◇1-1-1",
    budget: "2000〜3000円",
    tags: ["ピザ", "パスタ", "デート向き"],
  },
];
