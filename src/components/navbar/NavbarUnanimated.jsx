import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { IoMenu, IoClose } from 'react-icons/io5';
import logo from '../../assets/img/logo.png';
import { Link } from "react-scroll";

const NavbarUnanimated = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimation] = useState('');
  const [menuIcon, setMenuIcon] = useState(<IoMenu className="text-2xl"/>);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuIcon(menuOpen ? <IoMenu className="text-2xl"/> : <IoClose className="text-2xl"/>);
  };

  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Berita', link: '/beritas' },
    { name: 'List   UMKM', link: '/umkms' }
  ];

  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  
  return (
    <> 
      {/* Ini navbarnya */}
      <div className={`bg-customcp11 fixed w-full z-10 pt-3`}>
        <div className="md:px-12 flex justify-between items-center md:flex-row pb-3">
          <div className="flex justify-between w-full md:w-auto items-center md:mb-0">
          
            {/* logo mcs */}
            <img src={logo} alt="Logo" className="flex w-24"/>

            {/* ini buttonnya */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white"
              >
                {menuIcon}
              </button>
            </div>
          </div>

          {/* {isHomeRoute && (
            <div className="pl-40 hidden md:flex justify-center flex-1">
              <Link 
                to="sejarah" 
                smooth={true} 
                duration={500} 
                className='text-customcp17 cursor-pointer mx-4 hover:bg-white hover:text-black px-2 py-1 rounded'
              >
                Sejarah
              </Link>
              <Link 
                to="lokasi" 
                smooth={true} 
                duration={500} 
                className='text-customcp17 cursor-pointer mx-4 hover:bg-white hover:text-black px-2 py-1 rounded'
              >
                Lokasi
              </Link>
              <Link 
                to="umkm" 
                smooth={true} 
                duration={500} 
                className='text-customcp17 cursor-pointer mx-4 hover:bg-white hover:text-black px-2 py-1 rounded'
              >
                UMKM
              </Link>
              <Link 
                to="kegiatan" 
                smooth={true} 
                duration={500} 
                className='text-customcp17 cursor-pointer mx-4 hover:bg-white hover:text-black px-2 py-1 rounded'
              >
                Kegiatan
              </Link>
            </div>
          )} */}


          {/* Menu items */}
          <ul className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:items-center w-full md:w-auto text-center ${menuAnimation}`}>
            {Links.map((link, index) => (
              <li key={index} className={`relative font-semibold md:my-0 md:mx-4 ${location.pathname === '/' ? 'text-customcp12' : 'text-white'}`}>
                <a href={link.link} className={`relative transition duration-500 ease-in-out group hover:text-customcp17 ${location.pathname === '/' ? 'text-customcp12' : 'text-white'}`}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarUnanimated;
