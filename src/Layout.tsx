import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className=" bg-[#2B2B2B] text-white overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
