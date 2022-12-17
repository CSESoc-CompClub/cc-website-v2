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

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



/*Header - Navbar
 Banner - 1452 x 553 

*/

const responsive = {
    0: { items: 1},
    800: { items: 2},
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
        title="Summer School"
        description="Our annual Summer School teaching many coding languages and concepts in a week"
    />,
    <Card
        img={carousel_two}
        title="3D Modelling"
        description="Our 3D Modelling Workshop working with A-Fram technologies"
    />,
    <Card
        img={carousel_three}
        title="Intro to Python"
        description="Learning the basics of Python, including their data structures and building a game!"
    />,
    <Card
        img={carousel_four}
        title="Micro Bits"
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
            <img src={banner} class='object-contain h-1/4 w-full'/>
            {/* <div class="md:flex sm:flex justify-center"> */}
            <div class="middle-section pb-[25px]">
                {/* <div class="md:flex-1 justify-self-center sm:flex-1"><img src={about_image} /></div> */}
                <div class="w-1/3 middle-image"><img class="rounded-lg object-center" src={about_image} /></div>
                {/* <div class="md:flex-1 sm:flex-1"> */}
                <div class="middle-text">
                    <p class="md:text-black text-5xl font-Inter font-semibold mb-8 sm:text-black">WHAT IS COMPCLUB</p>
                    <p class="m-auto w-96 font-Inter font-normal text-xl mb-8"> UNSW CompClub is a non-profit university society that aims to create a fun, collaborative environment for students to develop their interests and hone their programming skills along like-minded students.</p>
                    <Link to='/aboutus' class='flex justify-center'>
                        <button
                            class="p-[1rem] font-bold text-[1rem] m-[1rem] border-[2px] border-solid border-[#3B81F6] rounded-[0.2rem] text-[#3B81F6] hover:bg-[#1c4ed8] hover:text-white">
                            <p class="decoration-white"> Learn more → </p>
                        </button>
                    </Link>
                </div>
            </div>
            <div class="text-center pb-[100px]">
                <p class="text-5xl font-Inter font-semibold">PREVIOUS EVENTS</p>
                <div className="flex-initial pt-[50px] justify-items-center w-[70%] m-auto">
                     <div className = "shadow-md">
                        <AliceCarousel
                        autoPlay
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
                    <Link class = "pt-[100px]" to ="/events">
                        <button class="p-[1rem] font-bold text-[1rem] m-[1rem] border-[2px] border-solid border-[#3B81F6] rounded-[0.2rem] text-[#3B81F6] hover:bg-[#1c4ed8] hover:text-white">
                            Learn more →
                        </button>
                    </Link>
                </div>
            </div>
            
            <div class="text-center">
                <div class="flex justify-center text-5xl text-black font-bold">GET INVOLVED</div>
                <div class="py-[20px]">
                    <p class="w-[50%] text-center text-lg m-auto max-w-[1000px] font-Inter font-normal text-xl mb-8">If you are a uni student who would like to get invovled as a mentor, a teacher who would like to host a workshop at your school or a highschooler looking to be be part of a workshop, check out our Contact Us page for ways to get in touch!</p>
                    <button class="p-[1rem] font-bold text-[1rem] m-[1rem] border-[2px] border-solid border-[#3B81F6] rounded-[0.2rem] text-[#3B81F6] hover:bg-[#1c4ed8] hover:text-white">
                            Contact us →
                    </button>
                </div>
            </div>
    
]


        </div>
    )
}