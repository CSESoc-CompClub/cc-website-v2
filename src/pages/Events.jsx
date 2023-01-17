import React from 'react';
import './../styles/events.css'
import { ReactDOM } from 'react';
import banner from './../assets/events/events-banner.png';
import collage from './../assets/events/events-collage.png';
import UpcomingEvent from '../components/UpcomingEventsCard.jsx'
import SyllabusAccordion from '../components/SyllabusAccordion';
import SyllabusCards from '../components/SyllabusCards';
import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <div>
      <img src={banner} alt='' class='object-contain h-1/4 w-full' />


      <div class="text-center pt-[50px]">
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
                    {/* 
                      Event template to use for a new event
                       <UpcomingEvent 
                        name="Winter Workshop" 
                        description="We are welcoming high school students to join us over ☀️FIVE ☀️days in the school holidays to learn how to code and dip their toes into the world of 💻Computer Science!📟"
                        date=" 16th-20th of Jan 2023"
                        time="10am - 3pm each day"
                        location="UNSW"
                        link="https://www.facebook.com/events/3418864701715340"
                      />
                    
                    */}
                   
                    {/* If there a two/more events open at the same inclue this hr between two events
                      <hr class="h-0.5"/>
                    */}
                    <div id="event" class="flex justify-center bg-sky-100 p-4">
                      <div> 
                          <div id="name" class="text-lg font-bold">
                            No new events coming up
                          </div>
                          <div id="shortdescrip">
                            Remeber to check out our socials or come back later to see if any new events are coming up
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <h3 class='mt-10 text-3xl font-sans font-bold text-center pt-[75px] pb-[25px]'>Workshops</h3>
        <div class='w-[50%] text-center text-lg m-auto max-w-[1000px]'>
            Compclub runs a wide variety of workshops such as VR, Gaming and 3D
            modelling, taught through some of today's most popular programming
            languages. We run workshops for both schools and organisations as
            well as run our own public workshops hosted at UNSW.
        </div>
        <div class='mt-4 flex items-center justify-center pt-[50px]'>
          <img src={collage} alt='' />
        </div>
        <h3 class='mt-6 text-3xl font-sans font-bold text-center pt-[100px]'>Some of what we teach</h3>
        <SyllabusAccordion/>
        <SyllabusCards/>
      </div>
      <div class=' text-xl font-sans font-bold text-center pb-2 px-16 flex justify-center max-w-[1000px] m-auto'>
          If you would like to talk to us about running a workshop at your school or see when we are running our next event, head over to the Contact Us page!
      </div>
        <Link to='/contactus' class='flex justify-center pb-7 pt-[25px]'>
          <button class="p-[1rem] font-bold text-[1rem] m-[1rem] border-[2px] border-solid border-[#3B81F6] rounded-[0.2rem] text-[#3B81F6] hover:bg-[#1c4ed8] hover:text-white px-2 py-1">
            To Contact Us!
          </button>
        </Link>
    </div>
  );
}