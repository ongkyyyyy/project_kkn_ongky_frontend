import "react-multi-carousel/lib/styles.css";
import senam from '../assets/img/senam.jpg';
import mancing from '../assets/img/mancing.jpg';
import KegiatanGallery from '../components/sections/kegiatan';
import UMKMs from '../components/sections/umkms';
import CreatedBy from "../components/sections/createdBy";
import { ParallaxProvider } from "react-scroll-parallax";

function Dashboard() {

  return (
    <>
      <div className='flex items-center justify-center h-screen bg-fixed bg-parallax bg-cover'>
        <h1 className='text-5xl text-white uppercase'>Dompol</h1>
      </div>
      <div className='flex flex-col gap-7 overflow-hidden'>
        <div className='flex flex-col lg:flex-row sm:flex-col'>
          <div className='basis-8/12 mx-8 lg:ps-5 lg:ms-9 lg:mt-9 mt-5'>
            <div className='flex flex-col gap-2'>
              <p className='text-customcp17'>
                <strong>Tentang Padukuhan Dompol</strong>
              </p>
              <p className="mt-2 text-3xl font-extrabold font-poppins tracking-tight text-customcp11 sm:text-4xl">
                  Lokasi dan Geografis
                </p>
              <span>
                <p className='text-slate-500 m-0 p-0 mt-5'>
                  Padukuhan Dompol terletak di Desa Jerukwudel, Kecamatan Girisubo, Kabupaten Gunungkidul, Provinsi Daerah Istimewa Yogyakarta.
                </p>
                <p className='text-slate-500 m-0 p-0 mt-2'>
                  Wilayah ini memiliki topografi yang bervariasi dengan sebagian besar terdiri dari perbukitan karst khas Gunungkidul.
                </p>
                <p className='text-slate-500 m-0 mt-2'>
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
          <div className='basis-7/12 mx-6 lg:ps-5 lg:pe-5 lg:ms-9 mt-5 mb-5'>
            <div className='w-full overflow-hidden h-72 rounded-xl'>
              <img className="object-cover h-full w-full rounded-xl" src={mancing} alt="Activity"/>
            </div>
          </div>
          <div className='basis-7/12 mx-2 ps-5 mb-9 pe-9 me-9 lg:mb-5'>
            <div className='flex flex-col gap-2'>
              <div className="text-center">
                <p className="mt-2 text-3xl font-extrabold font-poppins tracking-tight text-customcp11 sm:text-4xl">
                  Sejarah Padukuhan Dompol
                </p>
                <p className="mt-4 max-w-2xl text-md text-gray-500 lg:mx-auto">
                  UMKM berperan penting dalam ekonomi lokal dengan menyediakan lapangan kerja dan meningkatkan pendapatan 
                  melalui usaha seperti kerajinan tangan dan pengolahan makanan tradisional. Meskipun menghadapi tantangan 
                  seperti akses pasar terbatas, UMKM ini terus berkembang melalui inovasi produk dan dukungan dari pemerintah daerah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-10 px-4 md:px-8 lg:px-16 overflow-hidden">
        <KegiatanGallery />
      </section>
        <UMKMs />
      <ParallaxProvider className='overflow-hidden'>
        <CreatedBy /> 
      </ParallaxProvider>
    </>
  );
}

export default Dashboard;
