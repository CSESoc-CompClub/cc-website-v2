import React from "react";
import '../AboutUs.css';
import penguin from '../components/AboutUs/penguin.png'
import About from "../components/about-us/about.png";

import Eventscard from './../components/EventsCard.jsx'
import { Grid, Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

import banner from './../assets/about-us/about-us-banner.jpg';
import htmlcss from './../assets/events/html-css.jpg';
import security from './../assets/events/security.jpg';
import candpython from './../assets/events/candpython.jpg';
import upcoming1 from './../assets/events/upcoming/Winterworkshops.jpeg'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function AboutUs () {
  return (
    <div>
      <img src={banner} alt='' class="w-full bg-cover bg-center" />
      {/* <div className="center"> */}
      <div class='mt-4 mx-12 center'>
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
    
        <div>
        <h3 class='mt-6 text-3xl font-sans font-bold text-center'>Flagship Events</h3>
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

      <div id="faqs">
        <div className="centerDiv">
          <h3 class='mt-6 text-3xl font-sans font-bold text-center'>FAQs</h3>
        </div>
        <div>

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="What types of coding workshops we run?"
              secondary={
                <React.Fragment>
                  {"We run all types of beginner workshops - web dev, python, C, etc."}
                </React.Fragment>
              }
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Is it held in UNSW or schools?"
              secondary={
                <React.Fragment>
                  {"Both! Depends on the workshop."}
                </React.Fragment>
              }
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Do we have to be in specific grade to attend?"
              secondary={
                <React.Fragment>
                  {"No! All high school students can attend"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

          {/* <ul>
            <li>What types of coding workshops we run?</li>
            <li>Do we go to schools</li>
            <li>What ages?</li>
            <li>Where do we  run our workshops?</li>
          </ul> */}
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
    </div>
  )
}