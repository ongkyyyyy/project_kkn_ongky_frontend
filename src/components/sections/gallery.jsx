import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import senam from '../../assets/img/senam.jpg';
import dompolStadium from '../../assets/img/dompolStadium.jpg';
import pemandangan from '../../assets/img/pemandangan.jpg';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((image) => {
      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    textRefs.current.forEach((text) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el, refs) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-3 pl-24 pr-24 lg:pr-40 sm:gap-4 md:gap-5">
      <div className="lg:w-5/6">
        <h1 className="text-4xl font-bold text-shadow-outline text-customcp11">Gallery Dompol</h1>
        <h1 className="text-md mt-3 mb-8 text-gray-500 max-w-[45rem]">
          Seperti apa lokasi dan kegiatan di Dompol?
        </h1>

        <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-[20rem] md:h-[28rem] mt-5 w-full">
          <img
            ref={(el) => addToRefs(el, imageRefs)}
            alt="Dompol Stadium"
            src={dompolStadium}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div ref={(el) => addToRefs(el, textRefs)} className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
            <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
              <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                Dompol Stadium
              </h3>
              <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                Stadium yang terletak di Dompol. Tempat ini sering digunakan untuk event event voli.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 sm:gap-4 md:gap-5 lg:block lg:w-4/6 relative lg:-me-20">
        <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-64 lg:h-96 lg:mt-5 w-full md:w-1/2 lg:w-5/6">
          <img
            ref={(el) => addToRefs(el, imageRefs)}
            alt="Pemandangan"
            src={pemandangan}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div ref={(el) => addToRefs(el, textRefs)} className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
            <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
              <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                Pemandangan Dompol
              </h3>
              <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                Pemandangan yang indah di sekitar Padukuhan Dompol
              </p>
            </div>
          </div>
        </div>

        <div className="relative lg:absolute z-10 overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-64 w-full md:w-1/2 lg:w-full lg:mt-5">
          <img
            ref={(el) => addToRefs(el, imageRefs)}
            alt="Senam"
            src={senam}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div ref={(el) => addToRefs(el, textRefs)} className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
            <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
              <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
              <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                ut consequuntur rerum aut unde aspernatur accusamus
                assumenda possimus quod nemo, id, sint dolore itaque sed
                earum, maxime sapiente ab numquam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
