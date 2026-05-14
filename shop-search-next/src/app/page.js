import { Suspense } from "react";
import SearchPage from "../components/SearchPage";

export default function Home() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <SearchPage />
    </Suspense>
  );
}