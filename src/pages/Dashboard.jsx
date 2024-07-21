import { useState, useEffect, lazy } from "react";
import "react-multi-carousel/lib/styles.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Element, animateScroll as scroll } from "react-scroll";
import '../scrollbar.css';

const UMKMs = lazy(() => import('../components/sections/umkms'));
const CreatedBy = lazy(() => import("../components/sections/createdBy"));
const Sejarah = lazy(() => import("../components/sections/sejarah"));
const Lokasi = lazy(() => import("../components/sections/lokasi"));
const Kegiatan = lazy(() => import("../components/sections/kegiatan"));

//Images
import senam from '../assets/img/senam.jpg';
import mancing from '../assets/img/mancing.jpg';

import dompolStadium from '../assets/img/dompolStadium.jpg';
import pemandangan from '../assets/img/pemandangan.jpg';
import Landing from "../components/sections/landing";

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
        <Element name="home">
            <section className='h-screen'>
              <Landing/>
            </section>
        </Element>

        <Element name="sejarah">
            <section className="h-full">
              <Sejarah />
            </section>
        </Element>

        <div className="pt-32"></div>

        <Element name="lokasi">
            <section className="h-full">
              <Lokasi />
            </section>
        </Element>

        <div className="pt-48"></div>

        <Element name="umkm">
            <section className='h-full'>
              <UMKMs />
            </section>
        </Element>

        <div className="pt-56"></div>

        <Element name="kegiatan">
          <section className='px-4 md:px-8 lg:px-16 h-full'>
            <div className='flex flex-col gap-2'>
              <p className='text-3xl font-extrabold font-poppins tracking-tight text-customcp17 sm:text-4xl text-center'>
                Gallery Padukuhan Dompol
              </p>
              <div className='overflow-x-auto'>
                <div className='flex gap-5 mt-8'>
                  <div className='flex-none w-64'>
                    <img className="object-cover h-64 w-full rounded-xl" src={dompolStadium} alt="Tourism Spot 1" />
                    <p className='text-slate-500 mt-2'>Dompol Stadium</p>
                  </div>
                  <div className='flex-none w-64'>
                    <img className="object-cover h-64 w-full rounded-xl" src={pemandangan} alt="Tourism Spot 2" />
                    <p className='text-slate-500 mt-2'>Pemandangan Sekitar Padukuhan Dompol.</p>
                  </div>
                  <div className='flex-none w-64'>
                    <img className="object-cover h-64 w-full rounded-xl" src={senam} alt="Tourism Spot 3" />
                    <p className='text-slate-500 mt-2'>Deskripsi singkat tentang tempat wisata 3.</p>
                  </div>
                  <div className='flex-none w-64'>
                    <img className="object-cover h-64 w-full rounded-xl" src={senam} alt="Tourism Spot 3" />
                    <p className='text-slate-500 mt-2'>Deskripsi singkat tentang tempat wisata 3.</p>
                  </div>
                  <div className='flex-none w-64'>
                    <img className="object-cover h-64 w-full rounded-xl" src={senam} alt="Tourism Spot 3" />
                    <p className='text-slate-500 mt-2'>Deskripsi singkat tentang tempat wisata 3.</p>
                  </div>
                  <div className='flex-none w-64'>
                    <img className="object-cover h-64 w-full rounded-xl" src={senam} alt="Tourism Spot 3" />
                    <p className='text-slate-500 mt-2'>Deskripsi singkat tentang tempat wisata 3.</p>
                  </div>
                  <div className='flex-none w-64'>
                    <img className="object-cover h-64 w-full rounded-xl" src={senam} alt="Tourism Spot 3" />
                    <p className='text-slate-500 mt-2'>Deskripsi singkat tentang tempat wisata 3.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <Element name="createdBy">
          <section className='px-4 pt-12 pb-12 md:px-8 lg:px-16'>
              <p className='text-3xl font-extrabold font-poppins tracking-tight text-customcp17 sm:text-4xl text-center pb-8'>
                Dibuat Oleh Kelompok 38 (Dompol) KKN 85
              </p>
              <CreatedBy />
          </section>
        </Element>
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
