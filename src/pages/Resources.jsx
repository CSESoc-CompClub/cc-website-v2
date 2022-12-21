import React from "react";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import ResourceCard from "../components/ResourceCard";
import PreviousWorkshopCar from "../components/PreviousWorkshopCard"
import Articles from "../data/Articles";

export default function Resources() {
  return (
    <div>
      <Hero />
      {/* Workshop Section */}
      <div class="text-center py-5">
        <h1 class="text-3xl gray-900 font-bold py-5">Resources</h1>
        <p class="gray-500">Google Drive links for our ongoing and previous workshops!</p>
        <div class="flex justify-center mb-3 p-4">
          <div class="flex flex-col space-y-6">
              <ResourceCard/>    
              <PreviousWorkshopCar/>      
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div class="text-center pt-[100px] pb-[50px]">
        <h1 class="text-3xl gray-900 font-bold py-5">Articles</h1>
        <div class="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center">
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
