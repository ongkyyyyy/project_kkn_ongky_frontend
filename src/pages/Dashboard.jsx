import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from 'react';
import { indexUmkm } from '../api/apiUmkm';
import { indexBeritas } from '../api/apiBerita';
import senam from '../assets/img/senam.jpg';
import mancing from '../assets/img/mancing.jpg';
import KegiatanGallery from '../components/gallery/kegiatan';
import UMKMs from '../components/gallery/umkms';

function Dashboard() {
  const [beritas, setBeritas] = useState([]);
  const [umkms, setUmkms] = useState([]);

  useEffect(() => {
    fetchBeritas();
    fetchUmkms();
  }, []);

  const fetchBeritas = async (query = '') => {
    try {
      const data = await indexBeritas(query);
      setBeritas(data);
    } catch (error) {
      console.error('Error fetching beritas:', error);
    }
  };

  const fetchUmkms = async (query = '') => {
    try {
      const data = await indexUmkm(query);
      setUmkms(data);
    } catch (error) {
      console.error('Error fetching UMKM:', error);
    }
  };

  return (
    <>
      <div className='pt-16'></div>
      <div className='flex items-center justify-center h-96 bg-fixed bg-parallax'>
        <h1 className='text-5xl text-white uppercase'>Dompol</h1>
      </div>
      <div className='flex flex-col gap-7 overflow-hidden'>
        <div className='flex flex-col lg:flex-row sm:flex-col'>
          <div className='basis-8/12 mx-8 lg:ps-5 lg:ms-9 lg:mt-9 mt-5'>
            <div className='flex flex-col gap-2'>
              <p className='text-customcp17'><strong>Tentang Padukuhan Dompol</strong></p>
              <h1 className='text-4xl font-bold font-poppins'>Lokasi dan geografi</h1>
              <span>
                <p className='text-slate-400 m-0 p-0 mt-5'>
                  Padukuhan Dompol terletak di Desa Jerukwudel, Kecamatan Girisubo, Kabupaten Gunungkidul, Provinsi Daerah Istimewa Yogyakarta.
                </p>
                <p className='text-slate-400 m-0 p-0 mt-2'>
                  Wilayah ini memiliki topografi yang bervariasi dengan sebagian besar terdiri dari perbukitan karst khas Gunungkidul.
                </p>
                <p className='text-slate-400 m-0 mt-2'>
                  Akses menuju Padukuhan Dompol dapat dicapai melalui jalan-jalan desa yang terhubung dengan jalan utama di Kecamatan Girisubo.
                </p>
              </span>
            </div>
          </div>
          <div className='basis-4/12 lg:ps-5 lg:pe-9 lg:me-9 lg:mt-9 mt-5'>
            <div className='w-11/12 h-96 mx-6 rounded-xl overflow-hidden'>
              <img className="object-cover h-full w-full rounded-xl" src={senam} alt="Activity"/>
            </div>
          </div>
        </div>
        <div className='flex flex-col-reverse lg:flex-row'>
          <div className='basis-5/12 mx-6 lg:ps-5 lg:pe-5 lg:ms-9 mt-5 mb-5'>
            <div className='w-full overflow-hidden h-72 rounded-xl'>
              <img className="object-cover h-full w-full rounded-xl" src={mancing} alt="Activity"/>
            </div>
          </div>
          <div className='basis-7/12 mx-2 ps-5 mb-9 pe-9 me-9 lg:mb-5'>
            <div className='flex flex-col gap-2'>
              <span>
                <p className='text-slate-400 m-0 p-0 mt-5'>
                  Our specialized learning materials encourage hands-on learning, promoting exploration and independent thinking.
                </p>
                <p className='text-slate-400 m-0 p-0 mt-2'>
                  These materials offer children opportunities for success in grasping abstract concepts, such as shapes and sizes.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="py-10 px-4 md:px-8 lg:px-16 overflow-hidden">
        <KegiatanGallery />
      </section>
      <section>
        <UMKMs />
      </section>
    </>
  );
}

export default Dashboard;
