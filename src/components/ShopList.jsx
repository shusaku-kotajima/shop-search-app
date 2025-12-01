// src/components/ShopList.jsx

function ShopList({ shops }) {
  return (
    <section>
      <h2 style={{ fontSize: "18px", marginBottom: "12px" }}>
        検索結果（{shops.length}件）
      </h2>

      {shops.length === 0 ? (
        <p>条件に合うお店がありませんでした。</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {shops.map((shop) => (
            <li
              key={shop.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "12px 16px",
                marginBottom: "12px",
              }}
            >
              <h3 style={{ margin: "0 0 4px", fontSize: "16px" }}>
                {shop.name}
              </h3>
              <p style={{ margin: "0 0 4px" }}>
                {shop.area} / {shop.category}
              </p>
              <p style={{ margin: "0 0 4px", fontSize: "14px" }}>
                予算目安：{shop.budget}
              </p>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                タグ：{shop.tags.join("、")}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ShopList;
