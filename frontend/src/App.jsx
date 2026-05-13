import { useState } from "react";
import "./App.css";
import { shops } from "./data/shops";
import SearchForm from "./components/SearchForm";
import ShopList from "./components/ShopList";

function App() {
  const [keyword, setKeyword] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedShop, setSelectedShop] = useState(null); // ★ モーダル用

  const areas = Array.from(new Set(shops.map((shop) => shop.area)));
  const categories = Array.from(new Set(shops.map((shop) => shop.category)));

  const keywordLower = keyword.toLowerCase();

  const filteredShops = shops.filter((shop) => {
    const matchKeyword =
      keywordLower === "" ||
      shop.name.toLowerCase().includes(keywordLower) ||
      shop.tags.some((tag) => tag.toLowerCase().includes(keywordLower));

    const matchArea = selectedArea === "" || shop.area === selectedArea;
    const matchCategory =
      selectedCategory === "" || shop.category === selectedCategory;

    return matchKeyword && matchArea && matchCategory;
  });

  const handleReset = () => {
    setKeyword("");
    setSelectedArea("");
    setSelectedCategory("");
  };

  const handleCloseModal = () => setSelectedShop(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">お店検索アプリ（仮）</h1>
        <p className="app-subtitle">
          気になるお店をキーワードやエリアでサクッと検索
        </p>
      </header>

      <main className="app-main">
        <SearchForm
          keyword={keyword}
          selectedArea={selectedArea}
          selectedCategory={selectedCategory}
          areas={areas}
          categories={categories}
          onKeywordChange={setKeyword}
          onAreaChange={setSelectedArea}
          onCategoryChange={setSelectedCategory}
          onReset={handleReset}
        />

        <ShopList
          shops={filteredShops}
          onSelectShop={setSelectedShop}
        />
      </main>

      {/* モーダル：お店が選択されているときだけ表示 */}
      {selectedShop && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={handleCloseModal}
            >
              ×
            </button>

            <h2 className="modal-title">{selectedShop.name}</h2>
            <p className="modal-sub">
              {selectedShop.address}
              <br />
              徒歩約 {selectedShop.walkMinutes} 分 ／ L.O. {selectedShop.lastOrder}
            </p>

            <div className="modal-map-wrapper">
              <iframe
                src={selectedShop.mapEmbedSrc}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="modal-map-iframe"
                title={`${selectedShop.name} の地図`}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
