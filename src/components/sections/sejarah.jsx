import 'react-multi-carousel/lib/styles.css';

const Sejarah = () => {
  return (
    <div className="relative text-center bg-white">
      <div className="relative bg-fixed bg-parallaxSejarah bg-cover h-96 text-white shadow-md">
        <div className='flex items-center justify-center inset-0 flex-col h-full'>
          <h1 className="text-4xl font-bold">Sejarah Dompol</h1>
          <p className="text-xl">Asal muasal Padukuhan Dompol</p>
        </div>
      </div>

      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-2">
        <div className="max-w-7xl mx-auto">
          <div className="mt-4 mb-10 relative overflow-hidden">
          <div className="text-center bg-white">
            <p className="mt-4 max-w-5xl text-xl text-gray-500 lg:mx-auto tracking-tighter">
                UMKM berperan penting dalam ekonomi lokal dengan menyediakan lapangan kerja dan meningkatkan pendapatan 
                melalui usaha seperti kerajinan tangan dan pengolahan makanan tradisional. Meskipun menghadapi tantangan 
                seperti akses pasar terbatas, UMKM ini terus berkembang melalui inovasi produk dan dukungan dari pemerintah daerah.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
