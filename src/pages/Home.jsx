import React from "react";
import image_about from "../assets/homepage_mid_bio.png"
import '../styles.css';
import '../index.css';


export default function Home () {

    return (

        <div>
            <img
                src={image_about}
                className='homepage_about_image'
                alt="High School Kids at a CompClub event"
                // style={{ marginTop: "12%", display: "inline-block;" }}
            ></img>
            <div 
                className='what_is_compclub_homepage'
            >
                WHAT IS COMPCLUB?
            </div>
            <div 
                className='mid_bio_text_homepage'
            >
            UNSW CompClub is a non-profit university society that aims to create a fun, collaborative environment for students to develop their interests and hone their programming skills along like-minded students.
            </div>
            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                className='button_homepage_learn_more'
            >
                Learn more →
            </button>
        </div>
    )

}