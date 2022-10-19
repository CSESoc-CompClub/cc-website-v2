import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import banner from '../assets/home/compclub_banner.png';
import './CSS/Home.scss';
import AboutImage from '../assets/home/comp-club-about-us.jpg';
import 'react-alice-carousel/lib/alice-carousel.css';
import '@fontsource/inter';
import '../styles.css';
import CarouselOne from '../assets/home/carousel-pics/comp_club_summer_workshop.jpg';
import CarouselTwo from '../assets/home/carousel-pics/comp-club-3d-workshop.png';
import CarouselThree from '../assets/home/carousel-pics/comp-club-intro-to-python.png';
import CarouselFour from '../assets/home/carousel-pics/comp-club-microbits-workshop.png';
import CarouselFive from '../assets/home/carousel-pics/intro_to_c_banner.png';

/* Header - Navbar
 Banner - 1452 x 553

*/

const responsive = {
  0: { items: 1 },
  980: { items: 2 },
  1450: { items: 3 },
};

function Card({ img, title, description }) {
  return (
    <div className="card">
      <div className="card__body">
        <img alt={`${title} card`} src={img} className="card__image" />
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
      <button type="button" className="card__btn">See More</button>
    </div>
  );
}

const items = [
  <Card
    img={CarouselOne}
    title="CompClub Summer School"
    description="Our annual Summer School teaching many coding languages and concepts in a week"
  />,
  <Card
    img={CarouselTwo}
    title="3D Modelling Workshop"
    description="Our 3D Modelling Workshop working with A-Fram technologies"
  />,
  <Card
    img={CarouselThree}
    title="Intro to Python Workshop"
    description="Learning the basics of Python, including their data structures and building a game!"
  />,
  <Card
    img={CarouselFour}
    title="Micro Bits Workshop"
    description="Let's explore hardware! Learn how to use a Micro Bit to do fun activities."
  />,
  <Card
    img={CarouselFive}
    title="Intro to C"
    description="Learn the basics of the language of C, a fundamental language that is powerful."
  />,
];

export default function Home() {
  return (
    <div>
      <img alt="csesoc compclub banner" src={banner} className="object-contain h-1/4" />
      <div className="middle-section">
        <div className="w-1/3 middle-image"><img alt="about us" className="rounded-lg object-center" src={AboutImage} /></div>
        <div className="middle-text">
          <p className="md:text-black text-5xl font-Inter font-semibold mb-8 sm:text-black">WHAT IS COMPCLUB</p>
          <p className="w-96 font-Inter font-normal text-xl mb-8"> UNSW CompClub is a non-profit university society that aims to create a fun, collaborative environment for students to develop their interests and hone their programming skills along like-minded students.</p>
          <button
            type="button"
            className="middle-button bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-36 h-14"
          >
            <p className="decoration-white"> Learn more → </p>
          </button>
        </div>
      </div>

      <div className="text-center py-5 pb-40">
        <p className="text-5xl font-Inter font-semibold">UPCOMING EVENTS</p>
        <div className="w-[67%] pt-[5%] pl-[15%] justify-items-center sm:w-[90%] pt-[5%] pl-[27%] justify-items-center">
          {' '}
          <AliceCarousel
            mouseTracking
            disableButtonsControls
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-14 w-36 mt-4 rounded-full"
          >
            <p className="decoration-white"> Learn more → </p>
          </button>
        </div>
      </div>
    </div>
  );
}
