import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import home1 from "../image/home1.jpg";
import home2 from "../image/home2.jpg";
import home3 from "../image/home3.jpg";
import { useNavigate } from "react-router-dom";
const carouselItems = [
  {
    id: "1",
    image: home1,
    buttonLink: "/products",
  },
  {
    id: "2",
    image: home2,
    buttonLink: "/category/salt",
  },
  {
    id: "3",
    image: home3,
    buttonLink: "/category/suction-hose",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden rounded-lg">
      {/* Carousel Items */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div
          onClick={() => {navigate(item.buttonLink);}}
            key={item.id}
            className="w-full cursor-pointer h-full flex-shrink-0 relative "
          >
            <img
              
              src={item.image}
              alt={item.title}
              className="w-full  h-full object-cover"
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-10" /> */}

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-4 mt-20">
                <p className="text-sm md:text-lg font-medium mb-2 text-blue-200">
                  {/* {item.subtitle} */}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {/* {item.title} */}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  {/* {item.description} */}
                </p>
                {/* <a
                  href={item.buttonLink}
                  className="inline-block bg-green-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  {item.buttonText}
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-blue p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-blue p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
