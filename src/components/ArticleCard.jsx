import React from 'react';

export default function ArticleCard({
  link, img, alt, title,
}) {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200 max-w-sm">
        <a href={link} target="_blank" rel="noreferrer">
          <img className="rounded-t-lg min-w-full" src={img} alt={alt} />
          <div className="p-6 text-left">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {title}
            </h5>
          </div>
        </a>
      </div>
    </div>
  );
}
