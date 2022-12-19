import banner from './../assets/contact-us/contact-us-banner.jpg';
import map from './../assets/contact-us/unsw-map.png';
import EmailIcon from '@mui/icons-material/Email';
import AppsIcon from '@mui/icons-material/Apps';
import fb from './../assets/contact-us/fb.svg';
import insta from './../assets/contact-us/insta.svg';
import insta2 from './../assets/contact-us/insta2.svg';
import linkedin from './../assets/contact-us/linkedin.svg';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { green } from '@mui/material/colors';

export default function ContactUs() {
  return (
    <div>
      <img src={banner} alt='' class='object-contain h-1/4 w-full' />
      <h3 class='mt-10 text-3xl font-sans font-bold text-center'>
        Let's get connected!
      </h3>
      <div class='mt-4 mx-12 text-center'>
        <p>
          Are you a teacher, parent or student interested in our workshops? Feel
          free to reach out to us via email or one of our socials and we'll get
          back to you faster then you can invert a binary tree!
        </p>
      </div>
      <div class='mt-10 mx-12 grid grid-rows-3 py-[25px]'>
        <div class='grid grid-cols-2 place-items-center justify-center gap-4'>
          <Avatar sx={{ bgcolor: green[700] }}>
            <Link href='mailto:directors@compclub.org' color='inherit'>
              <EmailIcon />
            </Link>
          </Avatar>
          <Avatar sx={{ bgcolor: green[700] }}>
            <AppsIcon />
          </Avatar>
        </div>
        <div class='grid grid-cols-2 place-items-center gap-4'>
          <div class='text-2xl font-bold'>Email</div>
          <div class='text-2xl font-bold'>Socials</div>
        </div>
        <div class='grid grid-cols-2 place-items-center gap-4'>
          <p>
            <a href='mailto:committee@compclub.org' class='sm:text-base text-xs'>committee@compclub.org</a>
          </p>
          <div class='grid grid-cols-3 place-items-center gap-2'>
            <Link
              href='https://www.facebook.com/CSESocCompClub'
              color='inherit'
            >
              <img src={fb} class='h-10 w-10' />
            </Link>
            <Link
              href='https://www.instagram.com/unswcompclub/?hl=en'
              color='inherit'
            >
              <img src={insta2} class='h-10 w-10' />
            </Link>
            <Link
              href='https://www.linkedin.com/company/csesoc-compclub/'
              color='inherit'
            >
              <img src={linkedin} class='h-10 w-10' />
            </Link>
          </div>
        </div>
      </div>
      <div class='sm:m-12 m-2 pb-[200px] sm:pb-[0px] grid place-items-center'>
        <img src={map} alt='' />
      </div>
    </div>
  );
}
