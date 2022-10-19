import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import logo from '../assets/general/compclub-logo.png';

export default function Header() {
  return (
    <header className="h-20 flex flex-row bg-slate-900 text-white items-center justify-center">
      <div>
        <Link to="/">
          <img
            className="object-contain h-7 sm:h-10 sm:basis-1/5 basis-1/4 sm:ml-5"
            src={logo}
            alt="CompClub Logo, homepage redirect"
          />
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center grow sm:text-xl">
        <Link className="basis-1/4 text-center hover:text-green-600" to="/aboutus">
          About Us
        </Link>
        <Link className="basis-1/4 text-center hover:text-green-600" to="/events">
          Events
        </Link>
        <Link
          className="basis-1/4 text-center hover:text-green-600"
          to="/resources"
        >
          Resources
        </Link>
        <Link
          className="basis-1/4 text-center hover:text-green-600"
          to="/contactus"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
