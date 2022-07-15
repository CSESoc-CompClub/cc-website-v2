import React from "react";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import ResourceCard from "../components/ResourceCard";

export default function Resources() {
  return (
    <div>
      <Hero />

    {/* Workshop Section */}
      <div class="text-center py-5">
        <h1 class="text-3xl gray-900 font-bold py-5">Resources</h1>
        <p class="gray-500 py-5">i love compclub</p>
        <div class="flex justify-center mb-3 bg-white-100 p-4">
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-6">
              {Array.from({ length: 2 }).map((_, index) => (
                <ResourceCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*Articles Section */}
      <div class="text-center py-5">
        <h1 class="text-3xl gray-900 font-bold py-5">Articles</h1>
        <p class="gray-500 py-5">compclub dev is goated</p>
        <div class="flex flex-row justify-center space-x-4 py-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <ArticleCard key={index} />
        ))}
        </div>
      </div>
    </div>
  );
}
