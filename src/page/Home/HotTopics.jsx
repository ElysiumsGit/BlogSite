import React from 'react';

const categoriesTop = [
  {
    title: 'Travel',
    posts: 368,
    img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Fashion',
    posts: 170,
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Science',
    posts: 53,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Lifestyle',
    posts: 58,
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Art',
    posts: 65,
    img: 'https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Crafts',
    posts: 125,
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31?auto=format&fit=crop&w=400&q=80',
  },
];

const categoriesBottom = [
  {
    title: 'Travel',
    posts: 125,
    img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Fashion',
    posts: 160,
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Science',
    posts: 148,
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Lifestyle',
    posts: 254,
    img: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Art',
    posts: 16,
    img: 'https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Crafts',
    posts: 75,
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
  },
];

const HotTopics = () => {
  return (
    <div className="flex flex-col gap-8 bg-gray-50">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div
          className="relative rounded-xl overflow-hidden cursor-pointer flex flex-col justify-center p-6 text-white h-64 md:h-auto"
          style={{
            backgroundImage:"url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Hot Topics</h2>
          <p className="text-sm mb-6">
            Based on{' '}
            <span className="underline cursor-pointer">your interests</span>
          </p>
          <button className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition duration-300 self-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-6">
          {categoriesTop.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white rounded-xl p-3 cursor-pointer shadow hover:shadow-lg transition"
            >
              <img
                src={category.img}
                alt={category.title}
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-cover"
              />
              <div>
                <h3 className="font-semibold text-sm md:text-base">{category.title}</h3>
                <span className="text-xs text-gray-500 rounded-md bg-gray-200 px-2 py-0.5">
                  {category.posts} posts
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categoriesBottom.map((category, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden cursor-pointer text-white h-20 sm:h-24"
            style={{
              backgroundImage: `url(${category.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bg-black/50 h-full w-full flex flex-col justify-center items-center rounded-xl px-2">
              <h3 className="font-semibold text-xs sm:text-sm">{category.title}</h3>
              <span className="text-[10px] sm:text-xs bg-gray-300 bg-opacity-70 text-black rounded-md px-2 py-0.5 mt-1">
                {category.posts} posts
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HotTopics;
