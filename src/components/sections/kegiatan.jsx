import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import senam from '../../assets/img/senam.jpg';
import kerjaBakti from '../../assets/img/kerjaBakti.jpg';
import rasulan from '../../assets/img/rasulan.jpg';
import lombaVoli from '../../assets/img/lombaVoli.jpg';

gsap.registerPlugin(ScrollTrigger);

const Kegiatan = () => {
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
    <div className="flex flex-col lg:flex-row gap-3 pl-6 pr-6 lg:pl-24 lg:pr-40 sm:gap-4 md:gap-5">
      <div className="lg:w-5/6">
        <h1 className="text-4xl font-bold text-shadow-outline text-customcp11">Kegiatan di Dompol</h1>
        <h1 className="text-md mt-3 mb-8 text-gray-500 max-w-[45rem]">
          Seperti apa kegiatan-kegiatan warga Padukuhan Dompol ?
        </h1>
        <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-[20rem] md:h-[28rem] mt-5 w-full">
          <img
            ref={(el) => addToRefs(el, imageRefs)}
            alt="rasulan"
            src={rasulan}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div ref={(el) => addToRefs(el, textRefs)} className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
            <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
              <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                Rasulan
              </h3>
              <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                Perayaan tradisional berupa syukuran kepada Tuhan yang dilakukan setelah masa panen selesai. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 lg:block lg:w-4/6 relative lg:-me-20">
        <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-64 lg:h-96 lg:mt-5 w-full md:w-1/2 lg:w-5/6">
          <img
            ref={(el) => addToRefs(el, imageRefs)}
            alt="Pemandangan"
            src={kerjaBakti}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div ref={(el) => addToRefs(el, textRefs)} className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
            <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
              <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                Kerja Bakti
              </h3>
              <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                Pelaksanaan kerja bakti oleh warga Padukuhan Dompol.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-64 w-full md:w-1/2 lg:w-[450px] lg:mt-5">
          <img
            ref={(el) => addToRefs(el, imageRefs)}
            alt="Senam"
            src={senam}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div ref={(el) => addToRefs(el, textRefs)} className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
            <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
              <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                Senam
              </h3>
              <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                Senam bersama di Balai Kalurahan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-64 w-full md:w-1/2 lg:w-5/6 mt-5 mx-auto lg:ml-2 lg:mt-24">
        <img
          ref={(el) => addToRefs(el, imageRefs)}
          alt="Lomba Voli"
          src={lombaVoli}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div ref={(el) => addToRefs(el, textRefs)} className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
          <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
            <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
              Pertandingan Bola Voli
            </h3>
            <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
              Menonton pertandingan Bola Voli di Stadium Dompol.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kegiatan;
