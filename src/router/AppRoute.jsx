import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CustomerLayout from '../layouts/CustomerLayout';
import AdminLayout from '../layouts/AdminLayout';
import LoginAdmin from '../pages/Admin/LoginAdmin';
import DashboardAdmin from '../pages/Admin/DashboardAdmin';
import BeritaManagement from '../pages/Admin/BeritaManagement';
import UmkmManagement from '../pages/Admin/UmkmManagement';
import BeritaCustomer from '../pages/Customer/BeritaCustomer';
import UmkmCustomer from '../pages/Customer/UmkmCustomer';
import ProtectedRoute from './ProtectedRoute'; 

const router = createBrowserRouter([
  {
    path: '',
    element: <CustomerLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'beritas',
        element: <BeritaCustomer />,
      },
      {
        path: 'umkms',
        element: <UmkmCustomer />,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginAdmin />,
  },
  {
    path: 'admin',
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
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
      },
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
