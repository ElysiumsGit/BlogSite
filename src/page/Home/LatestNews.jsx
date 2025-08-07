import React from 'react';

const LatestNews = () => {
  const newsData = [
    {
      categories: ['Lifestyle', 'Model'],
      readTime: '6 mins readTime',
      title: 'Gallery to Garment: Art Meets Design',
      description:
        'When brushstrokes inspire hemlines and canvases shape silhouettes, the result is a striking fusion of visual art and fashion design.',
      imageQuery: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
      author: 'Eleanor Pena',
      authorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
      date: 'Jun 13, 2025',
      views: 98,
      comments: 162,
    },
    {
      categories: ['Technology', 'AI'],
      readTime: '4 mins readTime',
      title: 'The Rise of Ethical AI in Fashion',
      description:
        'Exploring how artificial intelligence is reshaping creative boundaries while keeping sustainability and ethics in focus.',
      imageQuery: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
      author: 'Robert Fox',
      authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'Jul 21, 2025',
      views: 120,
      comments: 87,
    },
  ];

  return (
    <div className="mt-10 flex flex-col gap-6">
      <div className="flex items-center justify-between px-12 py-6 border bg-white border-gray-300 rounded-md">
        <section className="flex items-center gap-4">
          <h1 className="poppins-semibold text-xl">Latest News</h1>
          <h1 className="poppins-light text-xs">Real-Time Updates That Matter</h1>
        </section>
        <section>
          <h1 className="poppins-regular text-md cursor-pointer hover:underline">View More</h1>
        </section>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

const NewsCard = ({
  categories,
  readTime,
  title,
  description,
  imageQuery,
  author,
  authorImage,
  date,
  views,
  comments,
}) => {

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-12 space-y-5">
      <div className="flex items-center space-x-3 text-sm">
        {categories.map((cat, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
          >
            {cat}
          </span>
        ))}
        <span className="text-gray-400">• {readTime}</span>
      </div>

      <h1 className="text-2xl leading-tight poppins-medium">{title}</h1>

      <div className="relative h-90 rounded-lg overflow-hidden">
        <img
          src={imageQuery}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <p className="text-gray-600 text-base leading-relaxed poppins-regular">
        {description}
      </p>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <img
            src={authorImage}
            alt={author}
            className="h-8 w-8 rounded-full"
          />
          <span className="font-medium text-gray-800">{author}</span>
          <span>• {date}</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v9l-4-4H7a2 2 0 01-2-2V8a2 2 0 012-2h2">
              </path>
            </svg>
            <span>{views}</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 10h16M4 14h16M4 18h16">
              </path>
            </svg>
            <span>{comments}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
