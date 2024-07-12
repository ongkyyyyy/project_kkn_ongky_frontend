import { useState, useEffect } from 'react';
import { indexUmkm } from '../../api/apiUmkm';
import Carousel from 'react-carousel';

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

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Umkm Di Padukuhan Dompol
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Umkm di padukuhan Dompol
          </p>
        </div>
        <div className="mt-10">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
            {umkms.map((umkm, index) => (
              <img key={index} className="w-full h-64 bg-cover bg-center" src={`http://127.0.0.1:8000/storage/${umkm.foto_umkm}`} alt={`UMKM ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UMKMs;
