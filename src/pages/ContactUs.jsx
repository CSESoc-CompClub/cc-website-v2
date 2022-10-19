import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { green } from '@mui/material/colors';
import banner from '../assets/contact-us/contact-us-banner.jpg';
import map from '../assets/contact-us/unsw-map.png';
import fb from '../assets/contact-us/fb.svg';
import insta from '../assets/contact-us/insta.svg';
import linkedin from '../assets/contact-us/linkedin.svg';

export default function ContactUs() {
  return (
    <div>
      <img src={banner} alt="" className="object-contain h-1/4" />
      <h3 className="mt-10 text-3xl font-sans font-bold text-center">
        Let&apos;s get connected!
      </h3>
      <div className="mt-4 mx-12 text-center">
        <p>
          Are you a teacher, parent or student interested in our workshops? Feel
          free to reach out to us via email or one of our socials and we&apos;ll get
          back to you faster then you can invert a binary tree!
        </p>
      </div>
      <div className="mt-10 mx-12 grid grid-rows-3">
        <div className="grid grid-cols-2 place-items-center justify-center gap-4">
          <Avatar sx={{ bgcolor: green[700] }}>
            <Link href="mailto:directors@compclub.org" color="inherit">
              <EmailIcon />
            </Link>
          </Avatar>
          <Avatar sx={{ bgcolor: green[700] }}>
            <AppsIcon />
          </Avatar>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-4">
          <div className="text-2xl font-bold">Email</div>
          <div className="text-2xl font-bold">Socials</div>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-4">
          <p>
            <a href="mailto:directors@compclub.org">directors@compclub.org</a>
          </p>
          <div className="grid grid-cols-3 place-items-center gap-2">
            <Link
              href="https://www.facebook.com/CSESocCompClub"
              color="inherit"
            >
              <img alt="facebook link" src={fb} className="h-10 w-10" />
            </Link>
            <Link
              href="https://www.instagram.com/unswcompclub/?hl=en"
              color="inherit"
            >
              <img alt="instagram link" src={insta} className="h-14 w-14" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/csesoc-compclub/"
              color="inherit"
            >
              <img alt="linkedin link" src={linkedin} className="h-10 w-10" />
            </Link>
          </div>
        </div>
      </div>
      <div className="m-12 grid place-items-center">
        <img src={map} alt="" />
      </div>
    </div>
  );
}
