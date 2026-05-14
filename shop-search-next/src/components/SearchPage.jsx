"use client";

import "../app/App.css";
import { useShopSearch } from "../hooks/useShopSearch";
import SearchForm from "./SearchForm";
import ShopList from "./ShopList";

export default function SearchPage() {
  const {
    keyword,
    setKeyword,
    selectedArea,
    setSelectedArea,
    selectedCategory,
    setSelectedCategory,
    areas,
    categories,
    filteredShops,
    handleReset,
  } = useShopSearch();

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