import { useEffect } from 'react';
import { gsap } from 'gsap';

import video from '../../assets/video/dompolVideo.mp4';

const Landing = () => {
  useEffect(() => {
    gsap.fromTo(
      '.title',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className='relative h-full w-full'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src={video}
        autoPlay
        loop
        muted
      ></video>
      <div className='relative flex flex-col items-center justify-center h-full bg-black bg-opacity-50 px-4 text-center'>
        <p className='title text-4xl sm:text-5xl font-extrabold font-poppins tracking-tight text-customcp14'>
          Selamat Datang
        </p>
        <p className='title text-xl sm:text-2xl font-bold text-customcp14 pt-1'>
          di Website Padukuhan Dompol
        </p>
      </div>
    </div>
  );
};

export default Landing;
