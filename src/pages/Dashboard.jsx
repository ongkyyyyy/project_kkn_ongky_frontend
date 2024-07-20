import { useState, useEffect, lazy, Suspense } from "react";
import "react-multi-carousel/lib/styles.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Element, animateScroll as scroll } from "react-scroll";
import senam from '../assets/img/senam.jpg';
import mancing from '../assets/img/mancing.jpg';


const UMKMs = lazy(() => import('../components/sections/umkms'));
const CreatedBy = lazy(() => import("../components/sections/createdBy"));
const Sejarah = lazy(() => import("../components/sections/sejarah"));
const Lokasi = lazy(() => import("../components/sections/lokasi"));

const Dashboard = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ParallaxProvider>
      <div className='flex flex-col gap-7 overflow-hidden'>
        <Element name="sejarah">
          <Suspense fallback={<div>Loading...</div>}>
            <section className="h-full">
              <Sejarah />
            </section>
          </Suspense>
        </Element>

        <div className="pt-32"></div>

        <Element name="lokasi">
          <Suspense fallback={<div>Loading...</div>}>
            <section className="h-full">
              <Lokasi />
            </section>
          </Suspense>
        </Element>

        <div className="pt-32"></div>

        <Element name="umkm">
          <Suspense fallback={<div>Loading...</div>}>
            <section className='h-full'>
              <UMKMs />
            </section>
          </Suspense>
        </Element>

        <div className="pt-56"></div>

        <Element name="kegiatan">
          <Suspense fallback={<div>Loading...</div>}>
            <section className='px-4 md:px-8 lg:px-16 h-full'>
              <div className='flex flex-col gap-2'>
                <p className='text-3xl font-extrabold font-poppins tracking-tight text-customcp11 sm:text-4xl'>
                  Kegiatan
                </p>
                <div className='flex flex-col md:flex-row gap-5 mt-5'>
                  <div className='basis-1/3'>
                    <img className="object-cover h-64 w-full rounded-xl" src={senam} alt="Tourism Spot 1" />
                    <p className='text-slate-500 mt-2'>Deskripsi singkat tentang tempat wisata 1.</p>
                  </div>
                  <div className='basis-1/3'>
                    <img className="object-cover h-64 w-full rounded-xl" src={mancing} alt="Tourism Spot 2" />
                    <p className='text-slate-500 mt-2'>Deskripsi singkat tentang tempat wisata 2.</p>
                  </div>
                  <div className='basis-1/3'>
                    <img className="object-cover h-64 w-full rounded-xl" src={senam} alt="Tourism Spot 3" />
                    <p className='text-slate-500 mt-2'>Deskripsi singkat tentang tempat wisata 3.</p>
                  </div>
                </div>
              </div>
            </section>
          </Suspense>
        </Element>

        <section className='px-4 pt-12 md:px-8 lg:px-16'>
          <Suspense fallback={<div>Loading...</div>}>
            <p className='text-3xl font-extrabold font-poppins tracking-tight text-customcp11 sm:text-4xl text-center pb-8'>
              Dibuat Oleh Kelompok 38 (Dompol) KKN 85
            </p>
            <CreatedBy />
          </Suspense>
        </section>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 p-3 bg-customcp16 text-white rounded-full shadow-lg hover:bg-customcp17 focus:outline-none transition duration-300 scroll-button ${showButton ? 'scroll-button-visible' : ''}`}
        >
          ↑
        </button>
      )}
    </ParallaxProvider>
  );
}

export default Dashboard;
