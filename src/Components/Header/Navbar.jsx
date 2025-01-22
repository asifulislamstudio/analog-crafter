import React, { useContext,  useState } from 'react';
import { Link, NavLink,  } from 'react-router-dom';
import logo from '../../../public/logo.png'
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  const {user ,signOutUser} = useContext(AuthContext)

  const handleSignOUt = () => {
      
    signOutUser()
    .then(res => {
        Swal.fire({
            title: "Log Out",
            text: `User Log Out Successfuly..${res.code}`,
            icon: "success"
          });
    })


  }

  const NavMenu = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <button
          className="flex items-center"
          onClick={()=>setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
          aria-controls="dropdown-menu"
        >
          ALL PRODUCT
        </button>
        {dropdownOpen && (
          <ul
            id="dropdown-menu"
            className="p-4 z-50 w-48 font-primary-font text-lg  bg-gray-100 rounded shadow absolute mt-12"
          >
            <li>
              <NavLink to="/allproducts">All Products</NavLink>
            </li>,
            <li>
              <NavLink to="/woodcrafts">WoodCraft</NavLink>
            </li>
            <li>
              <NavLink to="/handcrafts">HandCraft</NavLink>
            </li>
          </ul>
        )}
      </li>
      <li>
        <NavLink to="/addproducts">ADD PRODUCT</NavLink>
      </li>
      <li>
        <NavLink to="/contactus">CONTACT US</NavLink>
      </li>
      <li>
        <NavLink to="/aboutus">ABOUT US</NavLink>
      </li>
    </>
  );

  return (
    <div className="w-[80%] mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              role="button"
              aria-label="Toggle navigation menu"
              className="btn btn-ghost lg:hidden"
               
         onClick={()=>setDropdownOpen(!dropdownOpen)}
            >
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
            </button>
            {dropdownOpen && (
              <ul
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {NavMenu}
              </ul>
            )}
          </div>
          <img src={logo} className='h-20' alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavMenu}</ul>
        </div>
        <div className="navbar-end">
            {
                user?.email ? <div className='flex items-center gap-x-2'><h1 className='font-light font-primary-font'>{user.email}</h1> <button className='btn btn-circle' onClick={handleSignOUt}>Log Out</button></div>  : <button className='btn'><Link to='/login'>Log In</Link></button>
            }
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
