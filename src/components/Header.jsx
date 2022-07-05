import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';
import logo from './../assets/general/compclub-logo.png'

export default function Header () {
  return(
    <header className='header fixed'>
      <Link to='/'>
        <img className='logo' src={logo} alt='CompClub Logo, homepage redirect'/>
      </Link>
      <Link className='nav' to='/aboutus'>About Us</Link>
      <Link className='nav' to='/events'>Events</Link>
      <Link className='nav' to='/resources'>Resources</Link>
      <Link className='nav' to='/contactus'>Contact Us</Link>
    </header>
  )
}