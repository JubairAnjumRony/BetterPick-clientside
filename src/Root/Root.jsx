import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div className="">
        <Navbar/>
        <div className = "min-h-[calc(100vh-340px)]">
        <Outlet></Outlet>
        </div>
      
        <Footer/>
      
      </div>
    );
};

export default Root;