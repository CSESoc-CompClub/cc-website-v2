import React from 'react';
import './../styles/events.css'
import { ReactDOM } from 'react';
import banner from './../assets/events/events-banner.png';
import htmlcss from './../assets/events/html-css.jpg';
import security from './../assets/events/security.jpg';
import candpython from './../assets/events/candpython.jpg';
import upcoming1 from './../assets/events/upcoming/Winterworkshops.jpeg'
import collage from './../assets/events/events-collage.png';
import Eventscard from './../components/EventsCard.jsx'
import { Grid, Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function Events() {
  return (
    <div>
      <img src={banner} alt='' class='object-contain h-1/4' />
      <h3 class='mt-6 text-3xl font-sans font-bold text-center'>Upcoming Events</h3>
      <div class='mt-4 mx-12 text-center'>
        <div style={{backgroundColor: "#ebebeb", "border-radius": "10px", height: "10%"}}>
          <div style={{display: "none"}}>Check back soon for new events!</div>
          <div style={{display: "block"}}> 
              <div className="upcomingevent">
                <div>Event: Winter Workhsop &nbsp; &nbsp; &nbsp; &nbsp;  When: 6th-8th of July 2022 &nbsp; &nbsp; &nbsp; &nbsp; Time: 10:00am-4:00pm &nbsp; &nbsp; &nbsp; &nbsp; Location: UNSW</div>
                <button className="eventlink"><a target="_blank" className="eventlink" href="https://www.facebook.com/events/744066593508315/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D">Checkout the facebook event for more info!</a></button>
              </div>
              <hr/><hr/><hr/>
              <div className="upcomingevent">
                <div>Event: Winter Workhsop &nbsp; &nbsp; &nbsp; &nbsp;  When: 6th-8th of July 2022 &nbsp; &nbsp; &nbsp; &nbsp; Time: 10:00am-4:00pm &nbsp; &nbsp; &nbsp; &nbsp; Location: UNSW</div>  
                <button className="eventlink"><a target="_blank" className="eventlink" href="https://www.facebook.com/events/744066593508315/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D">Checkout the facebook event for more info!</a></button>
              </div>
          </div>
        </div>
      </div>
      <div>
        <h3 class='mt-10 text-3xl font-sans font-bold text-center'>Workshops</h3>
        <div class='mt-4 mx-12 text-center'>
          <p>
            Compclub runs a wide varierty of workshops such as VR, Gaming and 3D
            modelling, taught through some of today's most popular programming
            languages. We run workshops for both schools and organisations as
            well as run our own public workshops hosted at UNSW.
          </p>
        </div>
        <div class='mt-4 flex items-center justify-center'>
          <img src={collage} alt='' />
        </div>
        <h3 class='mt-10 text-3xl font-sans font-bold text-center'>Some of what we teach</h3>
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
    </div>
  );
}
