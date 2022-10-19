import React from 'react';
import './../styles/events.css';
import banner from './../assets/events/events-banner.png';
import collage from './../assets/events/events-collage.png';
import UpcomingEvent from '../components/UpcomingEventsCard.jsx'
import SyllabusAccordion from '../components/SyllabusAccordion';
import SyllabusCards from '../components/SyllabusCards';
import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <div>
      <img src={banner} alt='' class='object-contain h-1/4' />
      <div class="text-center py-5">
        <div class="flex justify-center mb-3 p-4">
          <div>
            <div class="shadow-md bg-sky-500 rounded-3xl">
              <div class="shadow-md bg-gradient-to-r from-indigo-300 to-blue-800 max-w-lg rounded-3xl">
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
            Compclub runs a wide variety of workshops such as VR, Gaming and 3D
            modelling, taught through some of today's most popular programming
            languages. We run workshops for both schools and organisations as
            well as run our own public workshops hosted at UNSW.
          </p>
        </div>
        <div class='mt-4 flex items-center justify-center'>
          <img src={collage} alt='' />
        </div>
        <h3 class='mt-6 text-3xl font-sans font-bold text-center'>Some of what we teach</h3>
        <SyllabusAccordion/>
        <SyllabusCards/>
      </div>
      <div class='mt-6 text-xl font-sans font-bold text-center pb-2 px-16 flex justify-center'>
          If you would like to talk to us about running a workshop at your school or see when we are running our next event, head over to the Contact Us page!
      </div>
        <Link to='/contactus' class='flex justify-center pb-7'>
          <button class="bg-gradient-to-r from-indigo-300 to-blue-800 text-white hover:bg-green-500 hover:underline text-md font-normal rounded-xl px-2 py-1">
            To Contact Us!
          </button>
        </Link>
    </div>
  );
}