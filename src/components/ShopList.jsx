// src/components/ShopList.jsx

function ShopList({ shops }) {
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
            <li key={shop.id} className="card shop-card">
              <h3 className="shop-name">{shop.name}</h3>
              <p className="shop-meta">
                {shop.area} / {shop.category}
              </p>
              <p className="shop-budget">予算目安：{shop.budget}</p>
              <p className="shop-tags">
                タグ：<span>{shop.tags.join("、")}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ShopList;
