import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/AboutUs.css'
import penguin from '../assets/about-us/penguin.png'
import About from "../components/about-us/about.png";
import './../styles/events.css'
import banner from './../assets/about-us/about-us.jpg';
import SummerWorkshopBanner from '../assets/about-us/summer-workshop.jpg';
import WinterWorkshopBanner from '../assets/about-us/winter-workshop.png';
import GroupIcon from '@mui/icons-material/Group';
import FlagIcon from '@mui/icons-material/Flag';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
      <div class='mt-4 mx-12 center'>
        <div className="flexible-row">
          <div className="flexible-col">
            <div>
              {/* <h2>About Compclub</h2> */}
              <h3 class='mt-6 text-3xl font-sans font-bold'>About Compclub</h3>
              CompClub is a portfolio under the student run UNSW organisation CSESoc that promotes computing to high school students
              throughout the year. By running a variety of freeworkshops throughout the year, we aim to create a fun, collaborative
              environment for students to develop their interests and hone their programming skills along like-minded students.
            </div>
            {/* <div className="mini-flex-row">
              <div>
                <h2>15+</h2>
                Events
              </div>
              <div>
                <h2>500+</h2>
                Students taught
              </div>
            </div> */}
            <div className="mini-flex-row" style={{
              "justify-content": 'space-evenly',
              "padding-top": 10,
            }}>
              <div className="mini-flex-row">
                <GroupIcon sx={{ fontSize: "50px" }} />
                <div style={{
                  "padding-left": 15,
                }}>
                  <h2>300+</h2>
                  Students Reached
                </div>

              </div>
              <div className="mini-flex-row">
                <FlagIcon sx={{ fontSize: "50px" }} />
                <div style={{
                  "padding-left": 15,
                }}>
                  <h2>20+</h2>
                  Events
                </div>

              </div>
            </div>

          </div>

          <div className="center-vertical">
            <img src={About} width={1580} alt="Logo" />
          </div>
        </div>

        <div>
          <h3 class='mt-6 text-3xl font-sans font-bold text-center'>Flagship Events</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            "justify-content": 'space-evenly',
            "align-items": 'center',
            // "padding-top": 50,
            // "padding-bottom": 50,
          }}>

            <Card sx={{ maxWidth: 345, height: '100%', marginTop: 3 }}>
              <CardMedia
                component="img"
                alt="SubCom Recruitment Banner"
                height="140"
                image={WinterWorkshopBanner}
                sx={{ objectFit: "contain", height: 200 }}
              />
              <CardContent>
                <div id="name" class="text-lg font-bold">
                  Winter Workshop
                </div>
                <div id="shortdescrip">
                  Our annual Winter Workshop held in July - covering interesting and relevant topics including: Game Dev 🎮, Cyber Security 🔐, Web Dev 🌏 and more, you are sure to learn 🧠something new and meet some new people along the way 🤗
                </div>
              </CardContent>
              <CardActions>
                <div id="link">
                  <a href={"https://www.facebook.com/events/1004563656802334/"} target="_blank">
                    <button class="bg-[#0f182a] text-white hover:bg-green-500 hover:underline text-md font-normal rounded-xl px-2 py-1">
                      Learn more and sign up!
                    </button>
                  </a>
                </div>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, height: '100%', marginTop: 3 }}>
              <CardMedia
                component="img"
                alt="Mentor Recruitment Banner"
                height="200"
                image={SummerWorkshopBanner}
                sx={{ objectFit: "contain", height: 200 }}
              />
              <CardContent>
                <div id="name" class="text-lg font-bold">
                  Summer Workshop
                </div>
                <div id="shortdescrip">
                  Our annual Summer Workshop held in January - a week of fun computing workshops! Whether you’re a beginner, intermediate, or have no experience with coding, we will certainly have something for everyone! 😄
                </div>
              </CardContent>
              <CardActions>
                <div id="link">
                  <a href={"https://www.facebook.com/events/744066593508315/?ref=newsfeed"} target="_blank">
                    <button class="bg-[#0f182a] text-white hover:bg-green-500 hover:underline text-md font-normal rounded-xl px-2 py-1">
                      Learn more and sign up!
                    </button>
                  </a>
                </div>
              </CardActions>
            </Card>

            {/* <div id="event" class="flex p-4">
              <div> 
                  <img src={MentorRecruitment} alt='' class='object-contain' />
                  <div id="name" class="text-lg font-bold">
                    Mentor Recruitment
                  </div>
                  <div id="shortdescrip">
                    Being part of CompClub is a fun and rewarding volunteering experience!
                  </div>
                  <br/>
                  <div id="link">
                    <a href={"https://www.facebook.com/events/744066593508315/?ref=newsfeed"} target="_blank">
                      <button class="bg-[#0f182a] text-white hover:bg-green-500 hover:underline text-md font-normal rounded-xl px-2 py-1">
                        Learn more and sign up!
                      </button>
                    </a>
                  </div>
              </div>
            </div>

            <div id="event" class="flex p-4">
              <div> 
                  <img src={SubComRecruitment} alt='' class='object-contain' />
                  <div id="name" class="text-lg font-bold">
                    Mentor Recruitment
                  </div>
                  <div id="shortdescrip">
                    [CLOSED] 💡This is your chance to ✨INSPIRE ✨ high school students to join the tech field and build your communication skills! Join us for an 🥰unforgettable experience🥰 in raising future programmers 💻 and give back to the community‼️
                  </div>
                  <br/>
                  <div id="link">
                    <a href={"https://www.facebook.com/events/744066593508315/?ref=newsfeed"} target="_blank">
                      <button class="bg-[#0f182a] text-white hover:bg-green-500 hover:underline text-md font-normal rounded-xl px-2 py-1">
                        Learn more and sign up!
                      </button>
                    </a>
                  </div>
              </div>
            </div> */}

          </div>

          {/* <div class="flex justify-center">
            <button class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/events')}>
              See events
            </button>
          </div> */}

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

          <div class='flex flex-wrap sm:flex-nowrap'>
            <div class='sm:w-2/3'>
              <h3 class='mt-6 text-3xl font-sans font-bold'>Interested in CompClub?</h3>
              <br />
              <p class='text-lg'>
                Get in touch through our socials, or checkout our Contact Us page!
              </p>
              <br /><br />
              <div class='flex flex-wrap justify-start'>
                <button class="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded" onClick={() => navigate('/contactus')} style={{ marginLeft: 10, marginBottom: 5 }}>
                  Contact us
                </button>
                <button class="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded" style={{ marginLeft: 10, marginBottom: 5 }}>
                  Learn more
                </button>
              </div>
            </div>
            <div class='sm:w-1/3'>
              <img src={penguin} alt="poco the penguin mascot" />
            </div>
          </div>
          <br /><br />
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