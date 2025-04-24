import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { NavLink, Outlet } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import { FaHome} from "react-icons/fa";
const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-primary text-white">
            <ul className="menu p-8 ">
               {user?(
                    <>
                  

                        <li>
                            <NavLink to="/dashboard/myProfile">
                            <RxAvatar className="text-2xl" />
                                My Profile
                            </NavLink>
                        </li>
                    </>
                ) : null}
                <div className="divider"></div>
                <li>
                    <NavLink to="/">
                        <FaHome></FaHome>
                        Home
                    </NavLink>
                </li>
            </ul>
            
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;