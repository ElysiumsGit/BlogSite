import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-12 px-4">
      <div className="flex flex-col items-center space-y-4 md:space-y-2">
        <h1 className="poppins-bold text-3xl text-black">MAGZIN.</h1>
        <p className="text-sm text-gray-700 poppins-regular text-center">Your Gateway to Global News</p>
      </div>

      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-gray-600 text-sm">
        <a href="#" className="hover:underline poppins-regular">Privacy Policy</a>
        <a href="#" className="hover:underline poppins-regular">Term of Use</a>
        <a href="#" className="hover:underline poppins-regular">Careers</a>
        <a href="#" className="hover:underline poppins-regular">Help</a>
        <a href="#" className="hover:underline poppins-regular">Become author</a>
      </nav>
    </footer>
  );
};

export default Footer;
