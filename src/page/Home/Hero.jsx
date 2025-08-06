import React from 'react';
import HeroCard from '../../components/Cards/HeroCard';
import fashionImage from "../../assets/heroImage1.jpg";
import cultureImage1 from "../../assets/cultureImage1.jpg";
import lifestyle from "../../assets/lifestyle.jpg";

const Hero = () => {
  const heroCardsData = [
    {
      image: cultureImage1,
      category: "Culture",
      date: "Jun 13, 2025",
      readTime: "6 mins read",
      title: "Reviving Traditions in a Digital World",
      description: "Discover how global cities are blending modern life with rich cultural traditions, preserving identity in a fast-paced era.",
    },
    {
      image: fashionImage,
      category: "Fashion",
      date: "Jun 13, 2025",
      readTime: "6 mins read",
      title: "Sustainable Fashion: The Next Trend",
      description: "Explore how eco-conscious fashion is reshaping runways and closets around the world with ethical choices.",
    },
    {
      image: lifestyle,
      category: "Lifestyle",
      date: "Jun 13, 2025",
      readTime: "6 mins read",
      title: "Digital Detox: A Modern Necessity",
      description: "From mindfulness to minimalism, learn how people are reclaiming their time in a hyperconnected world.",
    },
  ];

  return (
    <div className="text-center py-8 sm:py-12 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-pink-200 to-rose-100 rounded-lg">
      <h1 className="poppins-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4 sm:mb-6">
        Your Gateway to Global News
      </h1>
      <h3 className="poppins-regular text-base sm:text-lg md:text-xl text-black">
        Breaking Stories from Every Corner of the Globe
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-12">
        {heroCardsData.map((card, index) => (
          <HeroCard
            key={index}
            image={card.image}
            category={card.category}
            date={card.date}
            readTime={card.readTime}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
