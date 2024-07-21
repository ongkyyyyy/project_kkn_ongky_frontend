import senam from '../../assets/img/senam.jpg';
import mancing from '../../assets/img/mancing.jpg';

const Kegiatan = () =>  {

    return (
        <div className='flex flex-col gap-2'>
                <p className='text-3xl font-extrabold font-poppins tracking-tight text-customcp11 sm:text-4xl'>
                  Kegiatan
                </p>
                <div className='flex flex-col md:flex-row gap-5 mt-5'>
                  <div className='basis-1/3'>
                    <img className="object-cover h-64 w-full rounded-xl" src={senam} alt="Tourism Spot 1" />
                    <p className='text-slate-500 mt-2'>Deskripsi singkat tentang tempat wisata 1.</p>
                  </div>
                  <div className='basis-1/3'>
                    <img className="object-cover h-64 w-full rounded-xl" src={mancing} alt="Tourism Spot 2" />
                    <p className='text-slate-500 mt-2'>Deskripsi singkat tentang tempat wisata 2.</p>
                  </div>
                  <div className='basis-1/3'>
                    <img className="object-cover h-64 w-full rounded-xl" src={senam} alt="Tourism Spot 3" />
                    <p className='text-slate-500 mt-2'>Deskripsi singkat tentang tempat wisata 3.</p>
                  </div>
                </div>
              </div>
    );
};

export default Kegiatan;