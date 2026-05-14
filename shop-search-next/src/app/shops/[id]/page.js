import { shops } from "../../../data/shops";
import Link from "next/link";

export default async function ShopDetail({ params }) {
  const { id } = await params;
  const shop = shops.find((s) => String(s.id) === id);

  if (!shop) {
    return <div>お店が見つかりませんでした</div>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/">← 一覧に戻る</Link>

      <h1>{shop.name}</h1>
      <p>{shop.area} / {shop.category}</p>
      <p>{shop.address}</p>
      <p>徒歩約 {shop.walkMinutes} 分 ／ L.O. {shop.lastOrder}</p>

      <iframe
        src={shop.mapEmbedSrc}
        width="100%"
        height="400"
        loading="lazy"
        allowFullScreen
        title={`${shop.name} の地図`}
      />
    </div>
  );
}