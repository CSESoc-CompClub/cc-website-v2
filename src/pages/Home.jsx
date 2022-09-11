import {React, useState} from "react";
import Header from "../components/Header"
import banner from "../assets/compclub_banner.png"
import "./CSS/Home.scss"
import about_image from "../assets/about_image.png"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/inter";

/*Header - Navbar
 Banner - 1452 x 553 

*/

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

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
    return items.map((item, i) => (
        <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
            {item}
        </div>
    ));
};

export default function Home() {
    const [mainIndex, setMainIndex] = useState(0);
    const [mainAnimation, setMainAnimation] = useState(false);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

    const slideNext = () => {
        if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex + 1);
        }
    };

    const slidePrev = () => {
        if (!thumbAnimation && thumbIndex > 0) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex - 1);
        }
    };

    const syncMainBeforeChange = (e) => {
        setMainAnimation(true);
    };

    const syncMainAfterChange = (e) => {
        setMainAnimation(false);

        if (e.type === 'action') {
            setThumbIndex(e.item);
            setThumbAnimation(false);
        } else {
            setMainIndex(thumbIndex);
        }
    };

    const syncThumbs = (e) => {
        setThumbIndex(e.item);
        setThumbAnimation(false);

        if (!mainAnimation) {
            setMainIndex(e.item);
        }
    };

    return (
        <>
            <div className='banner_Homepage'>
                <img src={banner} />
            </div>
            <div className="mid_Homepage">
                <div className="home_about_image"><img src={about_image} /></div>
                <div className='what_is_compclub_homepage'>
                    WHAT IS COMPCLUB?
                </div>
                <div className="mid_bio_text_homepage"> <p> UNSW CompClub is a non-profit university society that aims to create a fun, collaborative environment for students to develop their interests and hone their programming skills along like-minded students. </p> </div>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    className='button_homepage_learn_more'
                >
                    <p style={{ color: "white" }}> Learn more → </p>
                </button>
            </div>
            <div className="bottom_Homepage">
                <div className="title_bottom_homepage">UPCOMING EVENTS</div>
                <div className="carousel_div_bottom"> <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                />
                </div>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    className='button_homepage_events'
                >
                    <p style={{ color: "white" }}> Learn more → </p>
                </button>


            </div>
        </>
    )
}