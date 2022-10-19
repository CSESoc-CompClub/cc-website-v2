import React from 'react';

export default function UpcomingEvent({
  name, description, date, location, time, link,
}) {
  return (
    <div id="event" className="flex justify-center bg-sky-100 p-4">
      <div>
        <div id="name" className="text-lg font-bold">
          {name}
        </div>
        <div id="shortdescrip">
          {description}
        </div>
        <div id="details">
          <br />
          <div id="header" className="font-semibold">
            === Event Details ===
          </div>
          <div>
            Date:
            {' '}
            {date}
            {' '}
            <br />
            Location:
            {' '}
            {location}
            {' '}
            <br />
            Time:
            {' '}
            {time}
            {' '}
            <br />
          </div>
        </div>
        <br />
        <div id="link">
          <a href={link} target="_blank" rel="noreferrer">
            <button type="button" className="bg-gradient-to-r from-indigo-300 to-blue-800 text-white hover:bg-green-500 hover:underline text-md font-normal rounded-xl px-2 py-1">
              Learn more and sign up!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
