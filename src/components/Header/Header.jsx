import React, { useState } from 'react';
import { CiSearch, CiMenuFries } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaBolt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <header className='flex items-center justify-between px-4 md:px-6 h-[72px] relative z-50 bg-white'>
        {/* Left Branding */}
        <div className='flex items-center space-x-4 md:space-x-7'>
          <h1 className='text-xl md:text-2xl poppins-bold'>
            <span className='text-orange-500'>MAG</span>
            <span className='text-green-700'>ZIN</span>
            <span className='text-green-900'>.</span>
          </h1>

          <div className='hidden md:block border border-gray-100 h-[72px]'></div>
          <p className='hidden md:block text-sm text-gray-500 poppins-light'>The colors of Life.</p>
        </div>

        {/* Navigation - Desktop Only */}
        <nav className='hidden md:block poppins-regular'>
          <ul className='flex space-x-8 text-sm items-center'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Features</li>
            <li className='cursor-pointer'>Collections</li>
            <li className='cursor-pointer flex items-center gap-1'>
              Trending
              <span className='bg-green-100 text-green-800 rounded-full p-1'>
                <FaBolt className='text-xs' />
              </span>
            </li>
            <li className='cursor-pointer'>Latest</li>
            <li className='cursor-pointer'>Contact</li>
          </ul>
        </nav>

        <div className='flex items-center space-x-3 md:space-x-5'>
          <div className='flex items-center space-x-1 cursor-pointer'>
            <CiSearch className='text-lg' size={28}/>
            <span className='hidden sm:inline text-sm text-gray-600 poppins-light'>Search</span>
          </div>

          <div className='hidden md:block border border-gray-100 h-[72px]'></div>

          <MdDarkMode className='text-xl cursor-pointer' />
          <CiMenuFries className='text-xl cursor-pointer md:hidden' onClick={toggleDrawer} />
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center px-4 py-4 border-b'>
          <h2 className='text-lg font-semibold'>Menu</h2>
          <IoClose className='text-2xl cursor-pointer' onClick={toggleDrawer} />
        </div>
        <ul className='flex flex-col space-y-5 px-6 py-4 text-sm'>
          <li className='cursor-pointer' onClick={toggleDrawer}>Home</li>
          <li className='cursor-pointer' onClick={toggleDrawer}>Features</li>
          <li className='cursor-pointer' onClick={toggleDrawer}>Collections</li>
          <li className='cursor-pointer flex items-center gap-2' onClick={toggleDrawer}>
            Trending
            <span className='bg-green-100 text-green-800 rounded-full p-1'>
              <FaBolt className='text-xs' />
            </span>
          </li>
          <li className='cursor-pointer' onClick={toggleDrawer}>Latest</li>
          <li className='cursor-pointer' onClick={toggleDrawer}>Contact</li>
        </ul>
      </div>

      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};

export default Header;
