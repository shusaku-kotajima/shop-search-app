import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { shops } from "../data/shops";

export function useShopSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URLから現在の値を読む
  const keyword = searchParams.get("keyword") ?? "";
  const selectedArea = searchParams.get("area") ?? "";
  const selectedCategory = searchParams.get("category") ?? "";

  const areas = Array.from(new Set(shops.map((shop) => shop.area)));
  const categories = Array.from(new Set(shops.map((shop) => shop.category)));

  // URLを更新する関数
  const updateURL = useCallback((key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.replace(`?${params.toString()}`);
  }, [router, searchParams]);

  const setKeyword = (value) => updateURL("keyword", value);
  const setSelectedArea = (value) => updateURL("area", value);
  const setSelectedCategory = (value) => updateURL("category", value);

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
    router.replace("/");
  };

  return {
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
  };
}