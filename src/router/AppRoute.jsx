import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CustomerLayout from '../layouts/CustomerLayout';
import AdminLayout from '../layouts/AdminLayout';
import LoginAdmin from '../pages/Admin/LoginAdmin';
import DashboardAdmin from '../pages/Admin/DashboardAdmin';
import BeritaManagement from '../pages/Admin/BeritaManagement';
import UmkmManagement from '../pages/Admin/UmkmManagement';

const router = createBrowserRouter([
  {
    path: '',
    element: <CustomerLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginAdmin />,
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <DashboardAdmin />,
      },
      {
        path: 'berita',
        element: <BeritaManagement />,
      },
      {
        path: 'umkm',
        element: <UmkmManagement />,
      }
    ],
  },
]);

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
