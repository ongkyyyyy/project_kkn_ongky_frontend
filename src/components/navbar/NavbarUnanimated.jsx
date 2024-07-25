import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { IoMenu, IoClose } from 'react-icons/io5';
import logo from '../../assets/img/logo.png';

const NavbarUnanimated = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(<IoMenu className="text-2xl"/>);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuIcon(menuOpen ? <IoMenu className="text-2xl"/> : <IoClose className="text-2xl"/>);
  };

  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Berita', link: '/beritas' },
    { name: 'UMKM', link: '/umkms' }
  ];

  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  return (
    <> 
      {/* Navbar */}
      <div className={`bg-customcp11 fixed w-full z-10 pt-3 pb-3`}>
        <div className="md:px-8 flex justify-between items-center flex-col md:flex-row">
          <div className="flex justify-between w-full md:w-auto items-center md:mb-0">
            {/* Logo */}
            <img src={logo} alt="Logo" className="flex w-24"/>

            {/* Menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white"
              >
                {menuIcon}
              </button>
            </div>
          </div>

          {/* Menu items */}
          <ul className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:items-center w-full md:w-auto text-center`}>
            {Links.map((link, index) => (
              <li key={index} className={`relative font-semibold my-6 md:my-0 md:mx-4 ${isHomeRoute ? 'text-customcp12' : 'text-white'}`}>
                <a href={link.link} className={`relative hover:text-customcp17 transition duration-500 ease-in-out group ${isHomeRoute ? 'text-customcp12' : 'text-white'}`}>
                  {link.name}
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 transform origin-bottom scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-95 ${isHomeRoute ? 'bg-customcp12' : 'bg-customcp17'}`}></span>
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
