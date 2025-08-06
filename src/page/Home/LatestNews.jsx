import React from 'react'
import reactImage from "../../assets/react.svg";
import sampleImage from "../../assets/heroImage1.jpg";

const LatestNews = () => {
  return (
    <div className='mt-10 flex flex-col gap-6'>
      <div className='flex items-center justify-between px-12 py-6 border bg-white border-gray-300 rounded-md'>
        <section className='flex items-center gap-4'>
          <h1 className='poppins-semibold text-xl'>Latest News</h1>
            <h1 className='poppins-light text-xs'>Real-Time Updates That Matter</h1>
        </section>
        <section>
          <h1 className='poppins-regular text-md'>View More</h1>
        </section>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6'> 
        <NewsCard/>
        <NewsCard/>
      </div>
    </div>
  )
}

const NewsCard = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-12 space-y-5">
      <div className="flex items-center space-x-3 text-sm">
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Lifestyle</span>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Model</span>
        <span className="text-gray-400">• 6 mins readTime</span>
      </div>

      <h1 className="text-2xl leading-tight poppins-medium">
        Gallery to Garment: Art Meets Design
      </h1>

      <div className="relative rounded-lg overflow-hidden">
        <img
          src={sampleImage}
          alt="Gallery to Garment"
          className="w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={sampleImage} alt="" />
        </div>
      </div>

      <p className="text-gray-600 text-base leading-relaxed poppins-regular">
        When brushstrokes inspire hemlines and canvases shape silhouettes, the result is a striking
        fusion of visual art and fashion design.
      </p>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <img
            src={reactImage} 
            alt="Eleanor Pena"
            className="h-8 w-8 rounded-full"
          />
          <span className="font-medium text-gray-800">Eleanor Pena</span>
          <span>• Jun 13, 2025</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v9l-4-4H7a2 2 0 01-2-2V8a2 2 0 012-2h2">
              </path>
            </svg>
            <span>98</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 10h16M4 14h16M4 18h16">
              </path>
            </svg>
            <span>162</span>
          </span>
        </div>
      </div>
    </div>
  );
};


export default LatestNews