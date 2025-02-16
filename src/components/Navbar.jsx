import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { FaUserCircle } from "react-icons/fa";
import logo from '../assets/logo.webp'




const Navbar = () => {


    const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  
    const handleToggle = (e) =>{
      if(e.target.checked) {
        setTheme("dark");
      }else{
        setTheme("light");
      }
    }
  
    useEffect(()=>{
      localStorage.setItem("theme",theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme",localTheme);
    },[theme]);
      
      const {user,signOutUser} = useContext(AuthContext);
      // console.log(user);
  
  
      const handleSignOut =() =>{
          signOutUser()
          .then(()=>{
            console.log("user logged out successfully");
            toast.success("user logged out successfully");
  
          })
          .catch(error=>console.log("ERROR",error.message))
        }
  
  
       const links = <>
       <li><NavLink to="/">Home</NavLink></li>
       
       <li><NavLink to="/queries">Queries </NavLink></li>
       
  
       {
           user && <>
           <li><NavLink to="/recommendationsForMe">Recomendations For Me</NavLink></li>
           <li><NavLink to="/myqueries">My Queries</NavLink></li>
           <li><NavLink to="/myRecomendations">My Recomendations</NavLink></li>
      
       
       
        </>
      }
  
       
       </>
  
      return (
      <div className="w-full bg-blue-300">

<div className="navbar bg-blue-300 w-3/4 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box relative z-10 mt-3 w-52 p-2 shadow">
              {links}

              {user && user?.email ? (
    <button
      onClick={()=>handleSignOut()}
      className="btn btn-neutral rounded-2xl ml-4 bg-red-600"
    >
      Log Out
    </button>
     ) : (
    <Link to="/login" className="btn btn-neutral rounded-2xl ml-4 bg-green-400">
      Login
    </Link>
  )}

              
              </ul>
            </div>
         
            <div className='flex justify-between items-center flex-wrap'>
             <div className="">
               <img className="sm:mr-2 w-11 h-11 rounded-full" src={logo} alt="" /> 
             </div>
             <div>
             <NavLink to ="/"className="btn btn-ghost text-lg text-xl">BetterPick</NavLink>
             </div>
          </div>
            
          </div>
          <div className="navbar-center  hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
             {links}
 
            </ul>



            {user && user?.email ? (
    <button
      onClick={()=>handleSignOut()}
      className="btn btn-neutral rounded-2xl ml-4 bg-red-600"
    >
      Log Out
    </button>
     ) : (
    <Link to="/login" className="btn btn-neutral rounded-2xl ml-4 bg-green-400">
      Login
    </Link>
  )}
  
            
          </div>
          <div className="navbar-end flex flex-wrap sm:text-lg items-center md:flex gap-4">
  
  
          <label className="grid cursor-pointer place-items-center">
    <input 
     data-tooltip-id="my-tooltip" data-tooltip-content="Click to Toggle theme!"
      type="checkbox"
      onChange={handleToggle}
      checked={theme === "light" ? false : true}
      value="synthwave"
      className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
      <Tooltip id="my-tooltip" />
    <svg
      className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
    <svg
      className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </label>
       
  
  
     {user && user?.email ? (
       <div className="relative group">
     
         <img
           className="w-8 h-8 lg:w-10 lg:h-10 rounded-full cursor-pointer"
           src={user?.photoURL}
           alt="User Avatar"
           title="Profile Picture"
         />
  
         <div className="absolute left-0 w-max px-2 py-1 bg-gray-700 text-white text-sm 
         rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {user?.displayName}
         </div>
    </div>
     ) : (
    <a ><FaUserCircle className="text-3xl" /></a>
     )} 
  
  
     {/* {user && user?.email ? (
    <button
      onClick={()=>handleSignOut()}
      className="btn btn-neutral rounded-none ml-4"
    >
      Log Out
    </button>
     ) : (
    <Link to="/login" className="btn btn-neutral rounded-none ml-4">
      Login
    </Link>
  )}
   */}
  
  </div>
         </div>
      </div>
      );
  };
  
  export default Navbar;