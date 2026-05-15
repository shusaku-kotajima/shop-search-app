"use client";

import "../app/App.css";
import { useShopSearch } from "../hooks/useShopSearch";
import SearchForm from "./SearchForm";
import ShopList from "./ShopList";

export default function SearchPage() {
  const {
    keyword,
    handleKeywordChange,
    handleKeywordCommit,
    selectedArea,
    setSelectedArea,
    selectedCategory,
    setSelectedCategory,
    areas,
    categories,
    filteredShops,
    loading, // ← 追加
    error,
    handleReset,
  } = useShopSearch();

  if (loading) {
    return <div className="app">読み込み中...</div>;
  }

  if (error) {
    return <div className="app">エラー：{error}</div>;
  }

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
          onKeywordChange={handleKeywordChange}
          onKeywordCommit={handleKeywordCommit}
          onAreaChange={setSelectedArea}
          onCategoryChange={setSelectedCategory}
          onReset={handleReset}
        />
        <ShopList shops={filteredShops} />
      </main>
    </div>
  );
}