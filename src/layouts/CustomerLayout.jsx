import { Outlet, useLocation } from "react-router-dom";
import NavbarUnanimated from "../components/navbar/NavbarUnanimated";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function CustomerLayout() {
  const location = useLocation();
  const { pathname } = location;

  const renderNavbar = () => {
    if (pathname === "/") {
      return <Navbar />;
    } else if (pathname === "/beritas" || pathname === "/umkms") {
      return <NavbarUnanimated />;
    }
    return <NavbarUnanimated />;
  };

  return (
    <>
      {renderNavbar()}
      <div className="overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default CustomerLayout;
