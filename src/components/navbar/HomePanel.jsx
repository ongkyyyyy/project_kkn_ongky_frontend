import { Link } from "react-scroll";

const HomePanel = () => {
  
  return (
    <> 
      <nav className='flex justify-around bg-white p-4 pt-20'>
        <Link to="lokasi" smooth={true} duration={500} className='text-customcp17 cursor-pointer'>Lokasi</Link>
        <Link to="sejarah" smooth={true} duration={500} className='text-customcp17 cursor-pointer'>Sejarah</Link>
        <Link to="kegiatan" smooth={true} duration={500} className='text-customcp17 cursor-pointer'>Kegiatan</Link>
        <Link to="umkm" smooth={true} duration={500} className='text-customcp17 cursor-pointer'>UMKM</Link>
      </nav>
    </>
  );
};

export default HomePanel;
