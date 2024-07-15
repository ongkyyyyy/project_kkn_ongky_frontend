import { Outlet } from "react-router-dom";
import NavbarUnanimated from "../components/navbar/NavbarUnanimated";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function CustomerLayout() {

  return (
    <>
      <div>
        <Navbar />
        <div className="overflow-x-hidden">
          <Outlet />
        </div>
       <Footer />
      </div>
    </>
  );
}

export default CustomerLayout;
