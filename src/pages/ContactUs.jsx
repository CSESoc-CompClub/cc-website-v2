import banner from './../assets/contact-us/contact-us-banner.jpg';
import map from './../assets/contact-us/unsw-map.png';
import EmailIcon from '@mui/icons-material/Email';
import AppsIcon from '@mui/icons-material/Apps';
import fb from './../assets/contact-us/fb.svg';
import insta from './../assets/contact-us/insta.svg';
import linkedin from './../assets/contact-us/linkedin.svg';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { green } from '@mui/material/colors';

export default function ContactUs() {
  return (
    <div>
      <img src={banner} alt='' class='object-contain h-1/4' />
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
      <div class='mt-10 mx-12 grid grid-cols-2 place-items-center'>
        <div class='grid place-items-center'>
          <Avatar sx={{ bgcolor: green[700] }}>
            <Link href='mailto:directors@compclub.org' color='inherit'>
              <EmailIcon />
            </Link>
          </Avatar>
          <div class='text-2xl font-bold'>Email</div>
          <p>
            <a href='mailto:directors@compclub.org'>directors@compclub.org</a>
          </p>
        </div>
        <div class='grid place-items-center'>
          <Avatar sx={{ bgcolor: green[700] }}>
            <AppsIcon />
          </Avatar>
          <div class='text-2xl font-bold'>Socials</div>
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
              <img src={insta} class='h-14 w-14' />
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
      <div class='m-12 grid place-items-center'>
        <img src={map} alt='' />
      </div>
    </div>
  );
}
