import React from "react";
import '../AboutUs.css';
import About from "../components/about-us/about.png";


export default function AboutUs () {
  return(
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
        <h2>Flagship Events</h2>
        Upcoming highschool workshops
      </div>
    </div>
  </div>
  );
}