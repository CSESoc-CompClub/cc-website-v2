import React from "react";
import banner from './../assets/resources/resources-banner.jpg'


export default function Hero() {
  return (
    <div className="w-full h-120 bg-gray-300 mb-10 ">
      {/* TODO: make hero component reusable */}
      <img src={banner} alt="resources"></img>
    </div>
  );
}
