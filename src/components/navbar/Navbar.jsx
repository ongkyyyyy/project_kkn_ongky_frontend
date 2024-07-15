import { useEffect, useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimation] = useState('');
  const [menuIcon, setMenuIcon] = useState(<IoMenu className="text-2xl"/>);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuIcon(menuOpen ? <IoMenu className="text-2xl"/> : <IoClose className="text-2xl"/>);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 10;

      setNavbarVisible(scrollPosition < threshold);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Berita', link: '/beritas' },
    { name: 'UMKM', link: '/umkms' }
  ];
  
  return (
    <> 
    {/* Ini navbarnya */}
      <div className={`bg-transparent fixed w-full z-10 pt-3 ${navbarVisible ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-y-5'} duration-500 ease-in-out`}>
        <div className="md:px-8 flex justify-between items-center flex-col md:flex-row">
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

          {/* ini menu2nya */}
          <ul className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:items-center w-full md:w-auto text-center ${menuAnimation}`}>
            {Links.map((link, index) => (
              <li key={index} className={`relative font-semibold my-6 md:my-0 md:mx-4 ${location.pathname === '/' ? 'text-white' : 'text-white'}`}>
                <a href={link.link} className={`relative hover:text-dark-500 transition duration-500 ease-in-out group ${location.pathname === '/' ? 'text-white' : 'text-white'}`}>
                  {link.name}
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 transform origin-bottom scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-95 ${location.pathname === '/' ? 'bg-white' : 'bg-white'}`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
