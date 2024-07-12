import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import logo from '../../assets/img/logo.png';

const HomePanel = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimation] = useState('');
  const [menuIcon, setMenuIcon] = useState(<IoMenu className="text-2xl"/>);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuIcon(menuOpen ? <IoMenu className="text-2xl"/> : <IoClose className="text-2xl"/>);
  };

  let Links = [
    { name: 'Seputar Dompol', link: '/' },
    { name: 'Ciri Khas', link: '/beritas' },
  ];
  
  return (
    <> 
    {/* Ini navbarnya */}
      <div className={`bg-customcp12 justify-center flex w-full z-10 pt-3 m-2`}>
        <div className="md:px-12 flexo md:flex-row pb-3">
          <div className="flex  w-full md:w-auto md:mb-0">
          </div>

          {/* ini menu2nya */}
          <ul className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:items-center w-full md:w-auto text-center ${menuAnimation}`}>
            {Links.map((link, index) => (
                <li key={index} className={`relative font-semibold my-6 md:my-0 md:mx-4 ${location.pathname === '/' ? 'text-customcp17' : 'text-black'}`}>
                <a href={link.link} className={`relative hover:text-dark-500 transition duration-500 ease-in-out group ${location.pathname === '/' ? 'text-customcp17' : 'text-black'}`}>
                  {link.name}
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 transform origin-bottom scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-95 ${location.pathname === '/' ? 'bg-customcp17' : 'bg-black'}`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </>
  );
};

export default HomePanel;
