import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/AboutUs.css'
import penguin from '../assets/about-us/penguin.PNG'
import About from "../assets/about-us/about.png";
import './../styles/events.css'
import banner from './../assets/about-us/about-us.jpg';
import SummerWorkshopBanner from '../assets/about-us/summer-workshop.jpg';
import WinterWorkshopBanner from '../assets/about-us/winter-workshop.png';


import eventicon from '../assets/about-us/icons/events.svg'
import schoolicon from '../assets/about-us/icons/schools.svg'
import studentsicon from '../assets/about-us/icons/students.svg'
import topicsicon from '../assets/about-us/icons/topics.svg'





import Card from '@mui/material/Card';
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
      <img src={banner} alt='' class='object-contain h-1/4 w-full' />
      <div class='mt-4 mx-12 center'>
        <div className="flexible-row">
          <div className="flexible-col">
            <div>
              <h3 class='mt-6 text-3xl font-sans font-bold'>About Compclub</h3>
              <div class='text-lg'>CompClub is a portfolio under the student run UNSW organisation CSESoc that promotes computing to high school students
              throughout the year. By running a variety of freeworkshops throughout the year, we aim to create a fun, collaborative
              environment for students to develop their interests and hone their programming skills along like-minded students.</div>
            </div>

            <div class='flex items-center justify-center md:hidden block'>
              <img src={About} width={1580} alt="Logo" class='py-[50px]'/>
            </div>


            <div class='flex md:flex-row justify-evenly items-center md:pt-[100px] '>
              <div class='flex flex-row justify-center items-center'>
                <img src={studentsicon} class='md:h-[5vw] md:w-[5vw] h-[6vw] w-[6vw]' />
                <div class='pl-[15px]'>
                  <div class='font-bold	md:text-[2vw] text-[3.5vw]'>400+</div>
                  <div class='font-bold	md:text-[1.5vw] text-[3vw]'>Students Reached</div>
                </div>

              </div>
              <div class='flex flex-row justify-center items-center'>
                <img src={eventicon} class='md:h-[5vw] md:w-[5vw] h-[7vw] w-[7vw]' />
                <div class='pl-[15px]'>
                  <div class='font-bold	md:text-[2vw] text-[3.5vw]'>20+</div>
                  <div class='font-bold	md:text-[1.5vw] text-[3vw]'>Events Run &nbsp; &nbsp; &nbsp;</div>
                </div>

              </div>
            </div>
            
            <div class='py-[2%]'></div>
            

            <div class='flex flex-row justify-evenly items-center pt-[10px]'>
              <div class='flex flex-row justify-center items-center'>
                <img src={schoolicon} class='md:h-[5vw] md:w-[5vw] h-[6vw] w-[6vw]'/>
                <div class='pl-[15px]'>
                <div class='font-bold	md:text-[2vw] text-[3.5vw]'>15+</div>
                <div class='font-bold	md:text-[1.5vw] text-[3vw]'>Schools Reached</div>
                </div>

              </div>
              <div class='flex flex-row justify-center items-center'>
                <img src={topicsicon} class='md:h-[5vw] md:w-[5vw] h-[6vw] w-[6vw]'/>
                <div class='pl-[15px]'>
                  <div class='font-bold	md:text-[2vw] text-[3.5vw]'>10+</div>
                  <div class='font-bold	md:text-[1.5vw] text-[3vw]'>Topics Taught</div>
                </div>

              </div>
            </div>

          </div>

          <div class='flex items-center justify-center	'>
            <img src={About} width={1580} alt="Logo" class="hidden md:block"/>
          </div>
        </div>
        

        <div>
          <h3 class='mt-6 text-3xl font-sans font-bold text-center pt-[150px]'>Flagship Events</h3>
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
              
            </Card>

          </div>

          <br /><br />
          <div>
            <h3 class='mt-6 text-3xl font-sans font-bold text-center pt-[150px]'>FAQs</h3>
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
              <h3 class='mt-6 text-3xl font-sans font-bold pt-[150px]'>Interested in CompClub?</h3>
              <br />
              <p class='text-lg'>
                Get in touch through our socials, or checkout our Contact Us page!
              </p>
              <br /><br />
              <div class='flex flex-wrap justify-start'>
                <button class="p-[1rem] font-bold text-[1rem] border-[2px] border-solid border-[#3B81F6] rounded-[0.2rem] text-[#3B81F6] hover:bg-[#1c4ed8] hover:text-white" onClick={() => navigate('/contactus')} style={{ marginLeft: 10, marginBottom: 5 }}>
                  Contact us
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



    </div>
  )
}