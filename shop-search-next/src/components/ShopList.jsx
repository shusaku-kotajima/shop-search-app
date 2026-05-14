// src/components/ShopList.jsx
import Link from "next/link";
function ShopList({ shops, onSelectShop }) {
  return (
    <section className="results-section">
      <div className="results-header">
        <h2 className="card-title">検索結果</h2>
        <span className="results-count">{shops.length}件</span>
      </div>

      {shops.length === 0 ? (
        <p className="results-empty">条件に合うお店がありませんでした。</p>
      ) : (
        <ul className="shop-list">
          {shops.map((shop) => (
            <li
              key={shop.id}
              className="card shop-card shop-card-clickable"

            >
              <div className="shop-card-inner">
                {/* 左側：テキスト情報 */}
                <div className="shop-info">
                  <p className="shop-label">お店名前</p>
                  <h3 className="shop-name">
                    <Link href={`/shops/${shop.id}`}>{shop.name}</Link>
                  </h3>

                  <p className="shop-highlight">
                    <span className="shop-highlight-label">目玉：</span>
                    {shop.highlightName}（{shop.highlightGenre}）
                  </p>

                  <p className="shop-meta">
                    {shop.area} / {shop.category}
                  </p>

                  <p className="shop-budget">予算：{shop.budget}</p>

                  <p className="shop-lo">
                    L.O.：{shop.lastOrder} ／ 徒歩約 {shop.walkMinutes} 分
                  </p>

                  <p className="shop-address">住所：{shop.address}</p>

                  <p className="shop-tags">
                    タグ：<span>{shop.tags.join("、")}</span>
                  </p>

                  <Link href={`/shops/${shop.id}`} className="button button-link">
                    詳細を見る
                  </Link>
                </div>

                {/* 右側：サムネ画像 */}
                <div className="shop-thumbnail-area">
                  <img
                    src={shop.thumbnailUrl}
                    alt={shop.highlightName}
                    className="shop-thumbnail"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ShopList;
