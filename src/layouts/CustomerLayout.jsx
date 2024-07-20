import { Outlet, useLocation } from "react-router-dom";
import NavbarUnanimated from "../components/navbar/NavbarUnanimated";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HomePanel from "../components/navbar/HomePanel";

function CustomerLayout() {
  const location = useLocation();

  return (
    <>
      <div>
        <NavbarUnanimated/>
        <div className="overflow-x-hidden">
          <Outlet />
        </div>
       <Footer />
      </div>
    </>
  );
}

export default CustomerLayout;
