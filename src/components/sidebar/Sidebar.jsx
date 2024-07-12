import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { IoIosSpeedometer, IoIosLogOut, IoIosMenu } from 'react-icons/io';
import { IoMdPaper } from 'react-icons/io'; 
import { FaStore } from 'react-icons/fa'; 

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  const Menus = [
    { title: 'Dashboard', icon: IoIosSpeedometer, to: '' },
    { title: 'Berita', icon: IoMdPaper, to: 'berita' },
    { title: 'UMKM', icon: FaStore, to: 'umkm' },
  ];

  return (
    <div className={`${open ? 'w-72' : 'w-20'} bg-customcp11 flex flex-col justify-between p-5 pt-8 relative duration-300`}>
      <div>
        <IoIosMenu
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-customcp11 bg-customcp11 border-2 rounded-full`}
          onClick={() => setOpen(!open)}
          size={30}
          color="white"
        />
        <div className={`flex gap-x-4 items-center ${open ? 'justify-center' : 'justify-start'}`}>
          <img src={logo} className={`cursor-pointer duration-500 ${open ? 'w-32' : 'w-10'} mt-2`} />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-customcp17 text-gray-300 text-sm items-center gap-x-4 ${
                Menu.gap ? 'mt-9' : 'mt-2'
              } ${index === 0 && 'bg-light-white'}`}
              onClick={() => navigate(Menu.to)}
            >
              <Menu.icon size="20" />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{Menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <li className="flex rounded-md p-2 cursor-pointer hover:bg-customcp17 text-gray-300 text-sm items-center gap-x-4" onClick={() => navigate('/logout')}>
          <IoIosLogOut size="20" />
          <span className={`${!open && 'hidden'} origin-left duration-200`}>Logout</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
