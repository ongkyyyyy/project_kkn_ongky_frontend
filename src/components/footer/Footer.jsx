import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/img/logo.png';

const Footer = () => {

    const Icons = [
        { icon: <FaFacebookF />, link: "" },
        { icon: <FaYoutube />, link: "" },
        { icon: <FaInstagram />, link: "" },
    ];

    const Navigation = [
        { name: 'Home', link: '/' },
        { name: 'Berita', link: '/berita' }
    ];

    const Contacts = [
        { name: 'Address: Padukuhan Dompol' },
        { name: 'Email: dompol@gmail.com' },
        { name: 'Telephone (Contact Number): (0274) 487711' }
    ];

    return (
        <footer className="bg-customcp11 pt-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-4 pb-16">

                <ul className="col-span-1">
                    <div className="flex flex-row gap-2 py-4 ps-7">
                        <img src={logo} className="h-20 sm:h-16 lg:h-20 w-auto" />
                    </div>
                </ul>

                {/* Navigasi */}
                <ul className="col-span-1">
                    <h1 className="mb-1 font-caecilia-bold text-xl text-customcp13">Navigation</h1>
                    {Navigation.map((menu) => (
                        <li key={menu.name}>
                            <a className="text-customcp12 hover:text-customcp17 font-poppins
                            duration-300 text-md cursor-pointer leading-6" href={menu.link}>
                                {menu.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Kata-kata Indah */}
                <ul className="col-span-1 pr-11">
                    <h1 className="mb-1 font-caecilia-bold text-xl text-customcp13">Have a question?</h1>
                    <li>
                        <p className="text-customcp12 hover:text-customcp17 duration-300 font-poppins
                        text-sm cursor-pointer leading-6">
                            Were consistently available to offer assistance whenever you need it.
                        </p>
                        <p className="text-customcp12 hover:text-customcp17 duration-300 font-poppins
                        text-sm cursor-pointer leading-6">
                            Our Consumer Care Team operates from Monday to Friday, between 9am and 5pm EST
                        </p>
                    </li>
                </ul>

                {/* Contacts */}
                <ul className="col-span-1">
                    <h1 className="mb-1 font-caecilia-bold text-xl text-customcp13 font-">Contact Us</h1>
                    {Contacts.map((menu) => (
                        <li key={menu.name}>
                            <p className="text-customcp12 hover:text-customcp17 font-poppins duration-300 text-sm cursor-pointer leading-6">
                                {menu.name}
                            </p>
                        </li>
                    ))}
                </ul>


            </div>

            {/* ini icon2 */}
            <div className="flex justify-between items-center text-center pt-5 text-[#f7f4e1] text-sm pb-4 bg-customcp16">
                <span className="ps-7 text-customcp12 font-poppins">© Copyright AB 2024</span>
                <div className="pr-5">
                    {window.location.hash === '' && (
                        Icons.map((socialIcon, index) => (
                            <a
                                key={index}
                                href={socialIcon.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 cursor-pointer inline-flex items-center rounded-full bg-dark-brown mx-1.5 text-xl 
                                hover:text-customcp17 duration-300"
                            >
                                {socialIcon.icon}
                            </a>
                        ))
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
