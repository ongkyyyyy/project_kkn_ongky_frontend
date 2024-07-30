import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dompol from '../../assets/img/pemandangan.jpg';

gsap.registerPlugin(ScrollTrigger);

const Landing2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customcp14">
      <div ref={containerRef} className="w-full max-w-4xl bg-customcp14 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-customcp11 mb-4 sm:mb-6 font-poppins font-extrabold">
              Padukuhan Dompol
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Merupakan padukuhan yang terletak di wilayah Jerukwudel, Kecamatan Girisubo, Kabupaten Gunung Kidul.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8 flex justify-center">
            <img src={dompol} alt="Landing Page Illustration" className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
