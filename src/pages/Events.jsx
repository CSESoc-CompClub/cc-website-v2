import React from 'react';
import banner from './../assets/events/events-banner.png';
import collage from './../assets/events/events-collage.png';

export default function Events() {
  return (
    <div>
      <img src={banner} alt='' class='object-contain h-1/4' />
      <div>
        <h3 class='mt-6 text-3xl font-sans font-bold text-center'>Workshops</h3>
        <div class='mt-4 mx-12 text-center'>
          <p>
            Compclub runs a wide varierty of workshops such as VR, Gaming and 3D
            modelling, taught through some of today's most popular programming
            languages. We run workshops for both schools and organisations as
            well as run our own public workshops hosted at UNSW.
          </p>
        </div>
        <div class='mt-4 mx-12'>
          <img src={collage} alt='' />
        </div>
      </div>
    </div>
  );
}
