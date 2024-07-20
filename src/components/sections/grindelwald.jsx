import { useState, useEffect } from 'react';
import { indexUmkm } from '../../api/apiUmkm';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const GrindelwaldSection = () => {
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
    <div className="relative text-center bg-white">
      <div className="relative bg-fixed bg-parallax bg-cover h-96 text-white shadow-md">
        <div className='flex items-center justify-center bg-fixed bg-parallax bg-cover inset-0 flex-col h-full'>
          <h1 className="text-4xl font-bold">UMKM</h1>
          <p className="text-xl">Berbagai macam UMKM</p>
        </div>
      </div>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-full p-2">
        <div className="max-w-7xl mx-auto">
          <div className="mt-4 mb-10 relative overflow-hidden">
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
            >
              {umkms.map((umkm, index) => (
                <div key={index} className="relative z-10 p-2">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:z-20 max-w-xs mx-auto">
                    <img 
                      src={`http://127.0.0.1:8000/storage/${umkm.foto_umkm}`} 
                      alt={`UMKM ${index}`} 
                      className="w-80 h-48 object-cover"
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
    </div>
  );
};

export default GrindelwaldSection;