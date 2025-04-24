// import React, { useContext } from 'react';
// import { AuthContext } from '../providers/AuthProvider';
// import { NavLink, Outlet } from 'react-router-dom';
// import { RxAvatar } from "react-icons/rx";
// import { FaHome} from "react-icons/fa";
// const Dashboard = () => {
//     const {user} = useContext(AuthContext);
//     return (
//         <div className="flex">
//         {/* dashboard side bar */}
//         <div className="w-64 min-h-screen bg-primary text-white">
//             <ul className="menu p-8 ">
//                {user?(
//                     <>
                  

//                         <li>
//                             <NavLink to="/dashboard/myProfile">
//                             <RxAvatar className="text-2xl" />
//                                 My Profile
//                             </NavLink>
//                         </li>
//                     </>
//                 ) : null}
//                 <div className="divider"></div>
//                 <li>
//                     <NavLink to="/">
//                         <FaHome></FaHome>
//                         Home
//                     </NavLink>
//                 </li>
//             </ul>
            
//         </div>
//         {/* dashboard content */}
//         <div className="flex-1 p-8">
//             <Outlet></Outlet>
//         </div>
//     </div>
//     );
// };

// export default Dashboard;



import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { NavLink, Outlet } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { FiMenu } from "react-icons/fi"; // Hamburger icon

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="drawer lg:drawer-open">
            {/* Toggle Button for Mobile */}
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Mobile Navbar */}
                <div className="w-full flex items-center justify-between p-4 bg-primary text-white lg:hidden">
                    <label htmlFor="dashboard-drawer" className="cursor-pointer text-2xl">
                        <FiMenu />
                    </label>
                    <span className="font-bold text-lg">Dashboard</span>
                </div>

                {/* Page Content */}
                <div className="p-4">
                    <Outlet />
                </div>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-8 w-64 min-h-full bg-primary text-white space-y-2">
                    {user && (
                        <li>
                            <NavLink to="/dashboard/myProfile">
                                <RxAvatar className="text-2xl" />
                                My Profile
                            </NavLink>
                        </li>
                    )}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
