import { IoIosPerson } from 'react-icons/io';

const AdminHeader = () => {
  return (
    <header className="bg-customcp11 text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <IoIosPerson size={30} className="mr-2" />
        <span className="text-xl font-medium">Admin</span>
      </div>
    </header>
  );
};

export default AdminHeader;
