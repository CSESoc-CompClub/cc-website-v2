import React from 'react';
import './../styles/events.css'
import { ReactDOM } from 'react';
import banner from './../assets/events/events-banner.png';
import htmlcss from './../assets/events/html-css.jpg';
import gamedev from './../assets/events/gamedev.jpeg'
import security from './../assets/events/security.jpg';
import candpython from './../assets/events/candpython.jpg';
import collage from './../assets/events/events-collage.png';
import WorkShopCard from '../components/WorkShopCard.jsx'
import UpcomingEvent from '../components/EventsCard.jsx'
import WorkShopCard2 from '../components/WorkShopCard2';
import { Grid, Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function Events() {
  return (
    <div>
      <img src={banner} alt='' class='object-contain h-1/4' />
      <div class="text-center py-5">
        <div class="flex justify-center mb-3 p-4">
          <div>
            <div class="shadow-md bg-sky-500 rounded-3xl">
              <div class="shadow-md bg-[#0f182a] max-w-lg rounded-3xl">
                <div class="border-b border-white-300 rounded-t-md p-4">
                  <div class="flex justify-center text-2xl text-white font-bold">
                    Upcoming Events
                  </div>
                </div>
                <div id="eventlist">
                    <UpcomingEvent 
                      name="Winter Workshop" 
                      description="It's time for CSESoc CompClub Winter Workshops!! 🐧❄️ We're welcoming high school students 🤩 to join us over three days in the school holidays to learn how to code!!"
                      date=" 6-8th of July 2022"
                      time="10:00 - 4:00pm"
                      location="UNSW"
                      link="https://www.facebook.com/events/744066593508315/?ref=newsfeed"
                    />
                    {/* If there a two/more events open at the same inclue this hr between two events
                      <hr class="h-0.5"/>
                    */}
                </div>
              </div>
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
        <h3 class='mt-6 text-3xl font-sans font-bold text-center'>Some of what we teach</h3>
        <div class='py-10 flex flex-row items-center justify-center w-50 h-500'>
          <WorkShopCard2 image={security}/>
        </div>
      </div>
    </div>
  );
}
