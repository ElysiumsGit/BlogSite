import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroCard = ({
  image,
  category = "General",
  date = "Unknown Date",
  readTime = "0 mins read",
  title = "Untitled",
  description = "No description provided.",
}) => {
  return (
    <div className="relative">
      <div className="relative bg-gray-300 w-full h-90 rounded-xl overflow-hidden group">
        <img
          src={image}
          alt="Hero"
          className="object-cover w-full h-full rounded-xl transform transition-transform duration-500 ease-in-out group-hover:scale-110 cursor-pointer"
        />
      </div>

      <div className="absolute top-60 mx-5 p-10 z-10 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-md">
        <div className="flex justify-between items-center">
          <div className='bg-white py-2 px-4 rounded-full'>
            <p className="text-sm text-gray-700 poppins-light">{category}</p>
          </div>
          <p className="text-xs text-black poppins-semibold">{date} • {readTime}</p>
        </div>
            
        <div className='mt-4 text-left'>
          <h1 className="text-3xl font-semibold mt-4 text-gray-900 poppins-semibold hover:underline cursor-pointer">{title}</h1>
          <p className="mt-4 text-gray-800 poppins-regular">{description}</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button className="text-primary flex items-center">
            <span className="mr-2 poppins-regular">Read More</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
