import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 flex flex-col items-center space-y-4 mt-12">
      <h1 className="poppins-bold text-3xl text-black">MAGZIN.</h1>
      <p className="text-sm text-gray-700 poppins-regular">Your Gateway to Global News</p>

      <nav className="flex space-x-6 text-gray-600 text-sm">
        <a href="#" className="hover:underline poppins-regular">Privacy Policy</a>
        <a href="#" className="hover:underline poppins-regular">Term of Use</a>
        <a href="#" className="hover:underline poppins-regular">Careers</a>
        <a href="#" className="hover:underline poppins-regular">Help</a>
        <a href="#" className="hover:underline poppins-regular">Become author</a>
      </nav>
    </footer>
  );
}

export default Footer;
