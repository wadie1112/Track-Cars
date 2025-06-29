import { NavLink, useLocation } from "react-router-dom";
import React from "react";
const NavBarUi = () => {

    const location = useLocation();

    return (
        <div className="navbar bg-custom-grey-backgroundUI w-full bg-base-100 shadow-sm border-b-[1px] border-[#D9D9D9]">
        
            <div className="navbar-start">
            <div className="dropdown">
             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
                <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 1</a></li>
                 <li><a>Item 3</a></li>
                 </ul>
            </div>
            <a className="text-3xl font-bold text-custom-green normal-case font-times">VeeTrack</a>
             </div>
            <div className="navbar-center hidden lg:flex font-medium text-lg">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink
                     to="/default"
                        className={({ isActive }) => isActive
                            ? "bg-custom-green text-white"
                            : "hover:bg-gray-200"
                        }>Carte</NavLink></li>
                <li><NavLink
                     to="/chauffeurs"
                        className={({ isActive }) => isActive
                            ? "bg-custom-green text-white"
                            : "hover:bg-gray-200"
                        }>Véhicules</NavLink></li>
                <li><NavLink
                     to="/chauffeurs"
                        className={({ isActive }) => isActive
                            ? "bg-custom-green text-white"
                            : "hover:bg-gray-200"
                        }>Chauffeurs</NavLink></li>
                <li><NavLink
                     to="/chauffeurs"
                        className={({ isActive }) => isActive
                            ? "bg-custom-green text-white"
                            : "hover:bg-gray-200"
                        }>Calendrier</NavLink></li>
                <li><NavLink
                     to="/chauffeurs"
                        className={({ isActive }) => isActive
                            ? "bg-custom-green text-white"
                            : "hover:bg-gray-200"
                        }>Taches</NavLink></li>
                <li><NavLink
                     to="/chauffeurs"
                        className={({ isActive }) => isActive
                            ? "bg-custom-green text-white"
                            : "hover:bg-gray-200"
                        }>Rapports</NavLink></li>
                <li><NavLink
                     to="/chauffeurs"
                        className={({ isActive }) => isActive
                            ? "bg-custom-green text-white"
                            : "hover:bg-gray-200"
                        }>Alertes</NavLink></li>
                </ul>
                 </div>
             <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <div  tabIndex={0} role="button" className="btn btn-ghost flex items-center ">
                <div  className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                </div>
                 <span className="text-sm font-medium">UserName</span>
                </div>
                <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                <a className="justify-between">Profile
                <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
                </ul>
                </div>
                </div>
            </div>
            
    );
    }
    export default NavBarUi;