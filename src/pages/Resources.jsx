import React from 'react';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import ResourceCard from '../components/ResourceCard';
import PreviousWorkshopCar from '../components/PreviousWorkshopCard';
import Articles from '../data/Articles';

export default function Resources() {
  return (
    <div>
      <Hero />
      {/* Workshop Section */}
      <div className="text-center py-5">
        <h1 className="text-3xl gray-900 font-bold py-5">Resources</h1>
        <p className="gray-500">Google Drive links for our ongoing and previous workshops!</p>
        <div className="flex justify-center mb-3 p-4">
          <div className="flex flex-col space-y-6">
            <ResourceCard />
            <PreviousWorkshopCar />
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="text-center py-5">
        <h1 className="text-3xl gray-900 font-bold py-5">Articles</h1>
        <div className="flex sm:flex-col sm:space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center">
          {Articles.map((articles) => (
            <ArticleCard
              key={articles.id}
              img={articles.img}
              imgAlt={articles.imgAlt}
              title={articles.title}
              link={articles.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
