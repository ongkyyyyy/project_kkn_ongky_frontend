import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dompol38fix from '../../assets/img/dompol38fix.png';

gsap.registerPlugin(ScrollTrigger);

const CreatedBy = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const elements = [textRef.current, imgRef.current];

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: elements,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      if (ScrollTrigger.getById('createdByAnimation')) {
        ScrollTrigger.getById('createdByAnimation').kill();
      }
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-4">
      <div className="sm:w-1/2 text-center sm:text-left" ref={textRef}>
        <p className='text-3xl font-extrabold font-poppins tracking-tight text-customcp16 sm:text-4xl'>
          Dibuat Oleh Kelompok 38 (Dompol) KKN 85 UAJY
        </p>
      </div>
      <div className="sm:w-1/2 flex justify-center" ref={imgRef}>
        <img 
          src={dompol38fix} 
          alt="Created by" 
          className="object-cover w-[900px] h-84 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default CreatedBy;
