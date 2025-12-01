// src/components/SearchForm.jsx

function SearchForm({
  keyword,
  selectedArea,
  selectedCategory,
  areas,
  categories,
  onKeywordChange,
  onAreaChange,
  onCategoryChange,
  onReset,
}) {
  return (
    <section
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "24px",
      }}
    >
      <h2 style={{ fontSize: "18px", marginBottom: "12px" }}>検索条件</h2>

      <div style={{ marginBottom: "12px" }}>
        <label>
          キーワード（店名・タグ）：
          <input
            type="text"
            value={keyword}
            onChange={(e) => onKeywordChange(e.target.value)}
            placeholder="例：ラーメン / カフェ / 個室"
            style={{
              marginLeft: "8px",
              padding: "4px 8px",
              width: "60%",
              maxWidth: "320px",
            }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>
          エリア：
          <select
            value={selectedArea}
            onChange={(e) => onAreaChange(e.target.value)}
            style={{ marginLeft: "8px", padding: "4px 8px" }}
          >
            <option value="">すべて</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>
          カテゴリ：
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            style={{ marginLeft: "8px", padding: "4px 8px" }}
          >
            <option value="">すべて</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="button"
        onClick={onReset}
        style={{ marginTop: "4px", padding: "4px 12px", cursor: "pointer" }}
      >
        条件をリセット
      </button>
    </section>
  );
}

export default SearchForm;
