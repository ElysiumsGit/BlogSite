import React from 'react'
import { CiSearch, CiMenuFries } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaBolt } from "react-icons/fa";

const Header = () => {
  return (
    <header className='flex items-center justify-between px-6 h-[82px]'>
      <div className='flex items-center space-x-7'>
        <h1 className='text-2xl poppins-bold'>
          <span className='text-orange-500'>MAG</span>
          <span className='text-green-700'>ZIN</span>
          <span className='text-green-900'>.</span>
        </h1>
        <div className='border border-gray-100 h-[82px]'></div>
        <p className='text-sm text-gray-500 poppins-light'>The colors of Life.</p>
      </div>

      <nav className='poppins-regular'>
        <ul className='flex space-x-10 text-sm items-center'>
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

      <div className='flex items-center space-x-5'>
        <div className='flex items-center space-x-1 cursor-pointer'>
          <CiSearch className='text-lg' size={32}/>
          <span className='text-sm text-gray-600 poppins-light'>Search</span>
        </div>
        <div className='border border-gray-100 h-[82px]'></div>
        <MdDarkMode className='text-xl cursor-pointer' />
        <CiMenuFries className='text-xl cursor-pointer' />
      </div>
    </header>
  );
}

export default Header;
