import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className="font-sans  bg-white w-full">
      
      <div className="relative w-full bg-[#113de5] z-50 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>
        <Navbar />
      </div>

      <div className="overflow-x-hidden">
        <Outlet />
      </div>
      <Footer/>
      
    </div>
  );
};

export default Main;