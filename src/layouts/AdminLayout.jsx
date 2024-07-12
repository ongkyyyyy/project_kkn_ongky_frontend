import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

function AdminLayout() {
  return (
    <div className="flex min-h-screen h-auto">
      <Sidebar/>
      <div className="overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
