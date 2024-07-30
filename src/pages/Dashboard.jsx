import { useState, useEffect, lazy } from "react";
import "react-multi-carousel/lib/styles.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Element, animateScroll as scroll } from "react-scroll";
import '../scrollbar.css';

const UMKMs = lazy(() => import('../components/sections/umkms'));
const CreatedBy = lazy(() => import("../components/sections/createdBy"));
const Sejarah = lazy(() => import("../components/sections/sejarah"));
const Lokasi = lazy(() => import("../components/sections/lokasi"));

// Images
import Landing from "../components/sections/landing";
import Landing2 from "../components/sections/landing2";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gallery from "../components/sections/gallery";
import Kegiatan from "../components/sections/kegiatan";

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
        <Element name="landing">
          <section className='h-screen'>
            <Landing />
            <Landing2 />
          </section>
        </Element>

        <Element name="landing2">
          <section className="h-screen">
          </section>
        </Element>

        <Element>
          <section>
            <Gallery />
          </section>
        </Element>

        <div className="pt-10 md:pt-20"></div>

        <Element>
          <section>
            <Kegiatan/>
          </section>
        </Element>

        <div className="pt-10 md:pt-20"></div>

        <Element name="sejarah">
          <section className="h-full">
            <Sejarah />
          </section>
        </Element>

        <Element name="lokasi">
          <section className="h-full">
            <Lokasi />
          </section>
        </Element>

        <div className="pt-32 md:pt-40"></div>

        <Element name="umkm">
          <section className='h-full'>
            <UMKMs />
          </section>
        </Element>

        <div className="pt-40"></div>

        <Element name="createdBy">
          <section className='px-2 md:px-4 pt-6 md:pt-12 pb-6 md:pb-12'>
            <CreatedBy />
          </section>
        </Element>

        <div className="pt-10 md:pt-16"></div>
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
