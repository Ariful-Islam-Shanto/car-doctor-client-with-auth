import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const location = useLocation();
    const path = location.pathname;

    const nav = <>
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About 
          </NavLink>
          <NavLink
            to={"/services"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Services
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Blog
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>
          {
            user && 
          <NavLink
            to={"/bookings"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Bookings
          </NavLink>
          }
    </>
    const nav2 = <>
      <NavLink
            to={"/order"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Order
          </NavLink>
      <NavLink
            to={"/order"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Order review
          </NavLink>
      <NavLink
            to={"/order"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Manage inventory
          </NavLink>
      <NavLink
            to={"/order"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Login
          </NavLink>
    </>

    const handleLogOut = () => {
      logOut()
      .then(() => {
        alert('Successfully logged out.')
      })
    }
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Link className="btn  btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-6 px-1">
            {
                path === '/login' ? nav : nav
            }
        </ul>
      </div>
      
      <div className="navbar-end">
      <div>
        {
          user ? <p className="text-black font-medium mr-4">{user.displayName || user.email}</p> : ''
        }
      </div>
        {
          user ?  <Link onClick={handleLogOut} className="btn" to={'/login'} >LOGOUT</Link> 
          :

        <Link className="btn" to={'/login'} >LOGIN</Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
