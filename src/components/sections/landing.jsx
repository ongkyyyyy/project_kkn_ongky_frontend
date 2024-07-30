import { useEffect, useRef, useState } from 'react';
import video from '../../assets/video/videoDompol.mp4';

const Landing = () => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        setIsInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative h-full w-full'>
      {isInView && (
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={video}
          autoPlay
          loop
          muted
          preload='auto'
          ref={videoRef}
        ></video>
      )}
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
