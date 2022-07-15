import React from "react";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";

export default function Resources() {
  return (
    <div>
      <Hero />

      {/*Articles Section */}
      <div class="text-center py-5">
        <h1 class="text-3xl gray-900 font-bold py-5">Articles</h1>
        <p class="gray-500 py-5">Placeholder description</p>
        <div class="flex flex-row justify-center space-x-4 py-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <ArticleCard key={index} />
        ))}
        </div>
      </div>
    </div>
  );
}
