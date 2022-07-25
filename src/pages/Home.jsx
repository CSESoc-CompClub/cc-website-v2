import React from "react";
import Header from "../components/Header"
import banner from "../assets/compclub_banner.png"
import "./CSS/Home.scss"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from "@mui/material";
import styled from "styled-components";
import { color, fontSize } from "@mui/system";
/*Header - Navbar
 Banner - 1452 x 553 

*/

const BlueButton = styled(Button)`
    position: absolute;
    left: 800px;
    background: #6893FB !important;
    border-radius: 20px !important;
    width: 257px !important;
    height: 50px !important;
    color: white !important;
    `

;


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};



function Card(props) {
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} className="card__image" />
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn">See More</button>
        </div>
    );
}

export default function Home() {
    const items = [
    <Card
    img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    title="The Everyday Salad"
    description="Take your boring salads up a knotch. This recipe is perfect for lunch"
  />,
  <Card
    img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    title="Simple Risotto"
    description="Fear Risotto no more! This simple recipe is perfect for family dinners."
  />,
  <Card
    img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    title="Baked Cod with Vegetables"
    description="Baked Cod with Vegetables. 30 minute meal!"
  />,
  <Card
  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  title="Baked Cod with Vegetables"
  description="Baked Cod with Vegetables. 30 minute meal!"
/>
    ]

    return (
        <>
            <h1 style = {{fontSize:"48px", color : "#0F172A", fontFamily:"Inter", fontWeight:"600", position:"absolute", left:"700px"}}>UPCOMING EVENTS</h1>
            <div className="wrapper">
            <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            />
            </div>
            <BlueButton>See More Events -</BlueButton>
        </>
    )
}