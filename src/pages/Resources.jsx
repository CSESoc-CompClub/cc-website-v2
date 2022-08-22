import React from "react";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import ResourceCard from "../components/ResourceCard";
import Articles from "../data/Articles";

export default function Resources() {
  return (
    <div>
      <Hero />
      {/* Workshop Section */}
      <div class="text-center py-5">
        <h1 class="text-3xl gray-900 font-bold py-5">Resources</h1>
        <p class="gray-500 py-5">i love compclub</p>
        <div class="flex justify-center mb-3 p-4">
          <div class="flex flex-col space-y-6">
            {Array.from({ length: 2 }).map((_, index) => (
              <ResourceCard key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div class="text-center py-5">
        <h1 class="text-3xl gray-900 font-bold py-5">Articles</h1>
        <p class="gray-500 py-5">compclub dev is goated</p>
        <div class="flex flex-row space-x-4 justify-center py-5">
          {Articles.map((articles) => {
            return (
              <ArticleCard
                key={articles.id}
                img={articles.img}
                imgAlt={articles.imgAlt}
                title={articles.title}
                link={articles.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
