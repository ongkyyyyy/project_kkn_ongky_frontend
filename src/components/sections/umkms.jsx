import { useState, useEffect } from 'react';
import { indexUmkm } from '../../api/apiUmkm';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const UMKMs = () => {
  const [umkms, setUmkms] = useState([]);

  useEffect(() => {
    fetchUmkms();
  }, []);

  const fetchUmkms = async (query = '') => {
    try {
      const data = await indexUmkm(query);
      setUmkms(data);
    } catch (error) {
      console.error('Error fetching UMKM:', error);
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-customcp11 sm:text-4xl">
            Umkm Di Padukuhan Dompol
          </p>
          <p className="mt-4 max-w-2xl text-md text-gray-500 lg:mx-auto">
            UMKM berperan penting dalam ekonomi lokal dengan menyediakan lapangan kerja dan meningkatkan pendapatan 
            melalui usaha seperti kerajinan tangan dan pengolahan makanan tradisional. Meskipun menghadapi tantangan 
            seperti akses pasar terbatas, UMKM ini terus berkembang melalui inovasi produk dan dukungan dari pemerintah daerah.
          </p>
        </div>
        <div className="mt-16 mb-10 relative overflow-visible">
          <Carousel 
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}  
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {umkms.map((umkm, index) => (
              <div key={index} className="relative z-10 p-2">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:z-20 max-w-xs mx-auto">
                  <img 
                    src={`http://127.0.0.1:8000/storage/${umkm.foto_umkm}`} 
                    alt={`UMKM ${index}`} 
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold pb-2">{umkm.nama_umkm}</h3>
                    <p className="mt-1 text-sm text-gray-600">{umkm.deskripsi_umkm}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default UMKMs;
