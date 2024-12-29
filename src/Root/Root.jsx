import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../Shared/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Shared/Footer/Footer";
const Root = () => {
  AOS.init();
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Root;
