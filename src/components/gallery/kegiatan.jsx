import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import senam from '../../assets/img/senam.jpg';
import mancing from '../../assets/img/mancing.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function KegiatanGallery() {
    const data = [
        senam,
        mancing,
        senam,
        mancing
    ];

    const component3Ref = useRef();

    useEffect(() => {
        if (component3Ref.current) {
            gsap.fromTo(".event", 
                { opacity: 0, y: 50 }, 
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: component3Ref.current,
                        scrub: true,
                        pin: false,
                        start: 'top 75%',
                        end: 'top 25%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        }
    }, []);

    return (
        <>
            <h1 ref={component3Ref} className="text-4xl text-center font-semibold event">Kegiatan - kegiatan</h1>
            <div className="text-center event">
                <h1 className="text-gray-500 pt-4 pb-1">
                    Ikan hiu makan tomat, 
                </h1>
            </div>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                breakpoints={{
                    1536: {
                        spaceBetween: 50
                    },
                    1280: {
                        spaceBetween: 40
                    },
                    1024: {
                        spaceBetween: 60
                    },
                    768: {
                        spaceBetween: 50
                    },
                }}
                spaceBetween={20}
                navigation={true}
                rewind={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false, 
                }}
                speed={4000} 
                modules={[Pagination, Navigation, Autoplay]}
                style={{
                    overflow: "hidden", 
                }}
                className="event"
            >
                {data.map((content, index) => (
                    <SwiperSlide key={index} className="h-full mt-5">
                        <div className="rounded-3xl pt-5 pb-12 items-center">
                            <img className="object-cover w-full aspect-video object-center rounded-2xl mx-auto" src={content} alt={index} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
