import { Outlet } from "react-router-dom";
import NavbarUnanimated from "../components/navbar/NavbarUnanimated";
import Footer from "../components/footer/Footer";

function CustomerLayout() {

  return (
    <>
      <div>
        <NavbarUnanimated />
        <div className="overflow-x-hidden">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CustomerLayout;
