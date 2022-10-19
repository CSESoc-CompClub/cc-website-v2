import React from 'react';
import MentorRecruitment from '../assets/about-us/mentor-recruitment.png';

export default function EventsCard({ name, description, link }) {
  return (
    <div id="event" className="flex justify-center p-4">
      <div>
        <img src={MentorRecruitment} alt="" className="object-contain" />
        <div id="name" className="text-lg font-bold">
          {name}
        </div>
        <div id="shortdescrip">
          {description}
        </div>
        <br />
        <div id="link">
          <a href={link} target="_blank" rel="noreferrer">
            <button type="button" className="bg-[#0f182a] text-white hover:bg-green-500 hover:underline text-md font-normal rounded-xl px-2 py-1">
              Learn more and sign up!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
