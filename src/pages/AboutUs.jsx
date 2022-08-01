import React from "react";
import '../AboutUs.css';
import penguin from '../components/AboutUs/penguin.png'
import About from "../components/about-us/about.png";

export default function AboutUs () {
  return (
    <div>
      <div className="center">
        <div className="flex-row section">
          <div className="flex-col">
            <div>
              <h2>About Compclub</h2>
              CompClub is a portfolio under the student run UNSW organisation CSESoc that promotes computing to high school students 
              throughout the year. By running a variety of freeworkshops throughout the year, we aim to create a fun, collaborative 
              environment for students to develop their interests and hone their programming skills along like-minded students.
            </div>
            <div className="flex-row">
              <div>
                <h2>10</h2>
                Workshops held
              </div>
              <div>
                <h2>500+</h2>
                Students taught
              </div>
            </div>
            <div className="flex-row">
              <div>
                <h2>10</h2>
                Workshops held
              </div>
              <div>
                <h2>500+</h2>
                Students taught
              </div>
            </div>
          </div>
    
          <div className="flex-col center-vertical">
          <img src={About} width={1580} alt="Logo" />
          </div>
        </div>
    
        <div className="flex-row section">
          <div className="flex-col center">
            <h3 class='mt-6 text-3xl font-sans font-bold text-center'>Flagship Events</h3>
            Upcoming highschool workshops
          </div>
        </div>

        <div>
        <h3 class='mt-6 text-3xl font-sans font-bold text-center'>Workshops</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        "justify-content": 'center',
        "allign-items": 'center',
        "padding-top": 50,
        "padding-bottom": 50,
        }}>
          <Eventscard image={candpython} description="hello" header="Coding fundamentals"/>
          <Eventscard image={htmlcss} description="hello" header="WebDev"/>
          <Eventscard image={security} description="hello" header="Security"/>
        </div>

      </div>
      <div id="faqs">
        <div className="centerDiv">
          <div><h2 className="faqsHeading">FAQS</h2></div>
        </div>
        <div>
          <ul>
            <li>What types of coding workshops we run?</li>
            <li>Do we go to schools</li>
            <li>What ages?</li>
            <li>Where do we  run our workshops?</li>
          </ul>
        </div>
      </div>
      <div>
        <div id="interestedInCC">
          <div>
            <h3 className="interestedHeading">Interested in CompClub?</h3>
            <br />
            <div className="intro">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit ipsum. Quisque ut efficitur dolor. Nulla massa velit, ornare non.
              </p>
              <br /><br />
              <div className="buttons">
                <button className="contactBtn">Contact us</button>
                <button className="contactBtn" id="learnMore">Learn more</button>
              </div>
            </div>
          </div>
          <div id="penguin">
            <img src={penguin} alt="poco the penguin mascot" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}