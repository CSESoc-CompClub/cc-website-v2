import React,  { useRef, useEffect } from "react";
import { gsap } from "gsap";


/////////////////////


// Options
var stars = 15;
var starSize = 96;
var starDistance = 200;
var starSpeed = 1.25;
var colors = [
   "#ff0000", "#ff7f00", "#80ff00", "#00ff80", "#00ffff",
  "#0080ff", "#0000ff", "#8000ff", "#ff00ff", "#fe007f"
];

function buildStars() 
{
  for (let i = 0; i < stars; i++) {
    var id = 'gStar' + i;
    var sz = Math.floor((Math.random() * (starSize)) + (starSize / 3));
    var createStar = {
      id: id,
      class: "gStar",
      html: '<i class="fa fa-star"></i>',
      css: {
        position: 'absolute',
        zIndex: 510,
        fontSize: sz + 'px',
        opacity: 0
      }
    };
    $("body").append($("<div>", createStar));
  }
}

function fireStars() 
{
  let target = $("body");
  
  let theme_color = colors[Math.floor(Math.random() * colors.length)];
  let theme_color_secondary = colors[Math.floor(Math.random() * colors.length)];
  do { theme_color_secondary = colors[Math.floor(Math.random() * colors.length)]; } 
  while ( theme_color_secondary === theme_color )
  
  for (let i = 0; i < stars; i++) {
    var sz = $("#gStar" + i).css("font-size").substr(0, ($("#gStar" + i).css("font-size").length - 2));
    // var dist = Math.floor((Math.random() * (starDistance)) + (starDistance / 4));
    var angle = Math.floor((Math.random() * (i + 1 * (360 / stars))) + (i * (360 / stars)));
    
    $("#gStar" + i).offset({top: target.offset().top + (target.height() / 2) - (sz / 2), left: target.offset().left + (target.width() / 2) - (sz / 2) });

    var tl = gsap.timeline();
    tl.set('#gStar' + i, { x: 0, y: 0, rotation: 0, scale: 0.35, left: target.offset().left + (target.width() / 2) - (sz / 2), top: target.offset().top + (target.height() / 2) - (sz / 2), color: ((i % 2 === 0) ? theme_color : theme_color_secondary) })
    .to('#gStar' + i, 0.35, { autoAlpha: .7 })
    .to('#gStar' + i, (Math.floor((Math.random() * (starSpeed * 100)) + ((starSpeed * 100) / 3)) / 100), {
      x: Math.cos(angle * Math.PI / -180) * Math.floor((Math.random() * (starDistance)) + (starDistance / 4)), 
      y: Math.sin(angle * Math.PI / -180) * Math.floor((Math.random() * (starDistance)) + (starDistance / 4)), 
      rotation: 280, scale: 1,
      ease: Power0.easenone,
      z: 0.01, force3D: true
    }, '<')
    .to('#gStar' + i, 0.35, { 
      autoAlpha: 0,
      z: 0.01,
      force3D: true
    }, ">-.25");
  }
}

// buildStars();
// $("body").click(fireStars);

export default function AnimatedThing() {

    const boxRef = useRef();

    // wait until DOM has been rendered
    // useEffect --> rerenders, set variables
    // useState --> execute code, soemthing happens, then execute code, then rerender, instead of resetting
    useEffect(() => {
    // gsap.to(boxRef.current, { rotation: "+=360" });
        buildStars();
        fireStars();
    });

    return <div className="box" ref={boxRef}>
        <p style={{ 
            fontSize: "30pt",
            textAlign: "center" 
        }}>
        Hello
        </p>
        </div>;

    // return (
    //     <div className="box">Hello</div>
    // );
}

