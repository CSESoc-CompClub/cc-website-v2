import { React, useState } from "react";
import Header from "../components/Header"
import banner from "../assets/home/compclub_banner.png"
import { Link } from 'react-router-dom';
import "./CSS/Home.scss"
import about_image from "../assets/home/comp-club-about-us.jpg"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/inter";
import '../styles.css';
import carousel_one from "../assets/home/carousel-pics/comp_club_summer_workshop.jpg";
import carousel_two from "../assets/home/carousel-pics/comp-club-3d-workshop.png";
import carousel_three from "../assets/home/carousel-pics/comp-club-intro-to-python.png";
import carousel_four from "../assets/home/carousel-pics/comp-club-microbits-workshop.png";
import carousel_five from "../assets/home/carousel-pics/intro_to_c_banner.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



/*Header - Navbar
 Banner - 1452 x 553 

*/

const responsive = {
    0: { items: 1},
    500: { items: 2},
    1024: { items: 3},
};



function Card(props) {
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} className="card__image" />
                <h2 className="card__title"><b>{props.title} </b></h2>
                <p className="card__description">{props.description}</p>
            </div>
        </div>
    );
}

const items = [
    <Card
        img={carousel_one}
        title="CompClub Summer School"
        description="Our annual Summer School teaching many coding languages and concepts in a week"
    />,
    <Card
        img={carousel_two}
        title="3D Modelling Workshop"
        description="Our 3D Modelling Workshop working with A-Fram technologies"
    />,
    <Card
        img={carousel_three}
        title="Intro to Python Workshop"
        description="Learning the basics of Python, including their data structures and building a game!"
    />,
    <Card
        img={carousel_four}
        title="Micro Bits Workshop"
        description="Let's explore hardware! Learn how to use a Micro Bit to do fun activities."
    />,
    <Card
        img={carousel_five}
        title="Intro to C"
        description="Learn the basics of the language of C, a fundamental language that is powerful."
    />
]

export default function Home() {
   return (
        <div>
            <img src={banner} class='object-contain h-1/4' />
            {/* <div class="md:flex sm:flex justify-center"> */}
            <div class="middle-section pb-[100px]">
                {/* <div class="md:flex-1 justify-self-center sm:flex-1"><img src={about_image} /></div> */}
                <div class="w-1/3 middle-image"><img class="rounded-lg object-center" src={about_image} /></div>
                {/* <div class="md:flex-1 sm:flex-1"> */}
                <div class="middle-text">
                    <p class="md:text-black text-5xl font-Inter font-semibold mb-8 sm:text-black">WHAT IS COMPCLUB</p>
                    <p class="w-96 font-Inter font-normal text-xl mb-8"> UNSW CompClub is a non-profit university society that aims to create a fun, collaborative environment for students to develop their interests and hone their programming skills along like-minded students.</p>
                    <button
                        class="middle-button bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-36 h-14"
                    >
                        <p class="decoration-white"> Learn more → </p>
                    </button>
                </div>
            </div>
            <div class="text-center pb-40">
                <p class="text-5xl font-Inter font-semibold">PREVIOUS EVENTS</p>
                <div className="flex-initial pt-[3%] justify-items-center">
                     <div className = "shadow-md">
                     <AliceCarousel
                    autoPlay
                    paddingLeft={100}
                    autoPlayStrategy="none"
                    autoPlayInterval={1500}
                    animationDuration={2000}
                    animationType="fadeout"
                    infinite
                    touchTracking={false}
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                />
                </div>
                <Link class = "pt-[1%]" to ="/events">
                    <button
                        className="btn"
                    >
                        <p> Learn more → </p>
                    </button>
                </Link>
                </div>
            </div>
        </div >
    )
}