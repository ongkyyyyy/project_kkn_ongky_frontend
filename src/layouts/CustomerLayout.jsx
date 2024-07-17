import { Outlet, useLocation } from "react-router-dom";
import NavbarUnanimated from "../components/navbar/NavbarUnanimated";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function CustomerLayout() {
  const location = useLocation();

  const shouldUseUnanimatedNavbar = location.pathname.includes("/beritas") || location.pathname.includes("/umkms");

  return (
    <>
      <div>
        {shouldUseUnanimatedNavbar ? <NavbarUnanimated /> : <Navbar />}
        <div className="overflow-x-hidden">
          <Outlet />
        </div>
       <Footer />
      </div>
    </>
  );
}

export default CustomerLayout;
