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

  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "16px" }}>お店検索アプリ（仮）</h1>

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
    </div>
  );
}

export default App;
