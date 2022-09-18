import React from "react";
import { useNavigate } from "react-router-dom";
import '../AboutUs.css';
import penguin from '../assets/about-us/penguin.PNG'
import About from "../components/about-us/about.png";

import Eventscard from './../components/EventsCard.jsx'

import banner from './../assets/about-us/about-us.jpg';
import htmlcss from './../assets/events/html-css.jpg';
import security from './../assets/events/security.jpg';
import candpython from './../assets/events/candpython.jpg';
import upcoming1 from './../assets/events/upcoming/Winterworkshops.jpeg'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <div>
      <img src={banner} alt='' class='object-contain h-1/4' />
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
            <Eventscard image={candpython} description="hello" header="Coding fundamentals" />
            <Eventscard image={htmlcss} description="hello" header="WebDev" />
            <Eventscard image={security} description="hello" header="Security" />
          </div>

          <div class="flex justify-center">
            <button class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/events')}>
              See events
            </button>
          </div>

          <br /><br />
          <div>
            <h3 class='mt-6 text-3xl font-sans font-bold text-center'>FAQs</h3>
          </div>

          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography class='text-lg font-semibold'>What types of coding workshops do we run?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography class='text-lg'>
                  We run all types of beginner workshops - web dev, python, C, etc.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography class='text-lg font-semibold'>Is it held in UNSW or schools?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography class='text-lg'>
                  Both! Depends on the workshop.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography class='text-lg font-semibold'>Do we have to be in specific grade to attend?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography class='text-lg'>
                  No! Our workshops are open to all high school students!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <br /><br />

          <div class='flex'>
            <div class='w-2/3'>
              <h3 class='mt-6 text-3xl font-sans font-bold'>Interested in CompClub?</h3>
              <br />
              <p class='text-lg'>
                Get in touch through our socials, or checkout our Contact Us page!
              </p>
              <br /><br />
              <div class='ml-20 flex space-x-10 justify-start'>
                <button class="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded" onClick={() => navigate('/contactus')}>
                  Contact us
                </button>
                <button class="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded">
                  Learn more
                </button>
              </div>
            </div>
            <div class='w-1/3'>
              <img src={penguin} alt="poco the penguin mascot" />
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind accordian doesn't seem to work */}
      {/* <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="flush-headingOne">
            <button class="accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
              aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to
              demonstrate
              the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="flush-headingTwo">
            <button class="accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
              aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to
              demonstrate
              the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this
              being
              filled with some actual content.</div>
          </div>
        </div>
        <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="flush-headingThree">
            <button class="accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
              aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to
              demonstrate
              the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
              happening here in terms of content, but just filling up the space to make it look, at least at first
              glance,
              a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div> */}

    </div>
  )
}