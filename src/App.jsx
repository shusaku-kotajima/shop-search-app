// src/App.jsx
import { useState } from "react";
import "./App.css";
import { shops } from "./data/shops";
import SearchForm from "./components/SearchForm";
import ShopList from "./components/ShopList";

function App() {
  const [keyword, setKeyword] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const areas = Array.from(new Set(shops.map((shop) => shop.area)));
  const categories = Array.from(
    new Set(shops.map((shop) => shop.category))
  );

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

        <ShopList shops={filteredShops} />
      </main>
    </div>
  );
}

export default App;
