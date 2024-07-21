import { useEffect } from 'react';
import { gsap } from 'gsap';

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
    <div className='flex flex-col items-center justify-center h-full'>
      <p className='title text-3xl font-extrabold font-poppins tracking-tight text-customcp17 sm:text-4xl'>
        Selamat Datang di Padukuhan Dompol
      </p>
      <p className='description text-lg text-center mt-5'>
        Padukuhan Dompol adalah salah satu padukuhan di Desa Kedungbanteng, Kecamatan Bojongsari, Kabupaten Purbalingga, Jawa Tengah.
      </p>
    </div>
  );
};

export default Landing;
