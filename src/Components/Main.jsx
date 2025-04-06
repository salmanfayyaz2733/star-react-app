import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../Accets/Shopping.jpg";
import image3 from "../Accets/Women.jpg";
import image2 from "../Accets/Mens.jpg";

// Image List
const Imagelist = [
  {
    id: 1,
    img: image1,
    title: "Connecting You with Skilled Workers You Can Trust",
    description:
      "We provide certified and experienced workers for all your needs – whether it's construction, repairs, or maintenance. Quality work, every time.",
  },
  {
    id: 2,
    img: image2,
    title: "Your Reliable Partner for Quality Labor & Manpower Services",
    description:
      "Your time is valuable, and we understand that. Our trusted manpower services are fast, reliable, and affordable – connecting you with skilled professionals in just a few clicks.",
  },
  {
    id: 3,
    img: image3,
    title: "Expert Workers, Affordable Rates – Service You Deserve!",
    description:
      "Finding the right worker is no longer a challenge. Get access to experienced labor you can rely on – available across cities, ready to serve you!",
  },
];

const Main = ({ Handelorderpopup }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % Imagelist.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full bg-[#c2cff5] dark:bg-gray-900">
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {Imagelist.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 flex flex-col md:flex-row items-center transition-transform duration-700 ease-in-out ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            {/* Left Side Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight mb-4 md:mb-6"
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 text-base md:text-lg"
              >
                {item.description}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={Handelorderpopup}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-md w-40 md:w-48 text-lg"
              >
                Demo
              </motion.button>
            </div>

            {/* Right Side - Image with Background layers */}
            <div className="w-full md:w-1/2 relative overflow-hidden flex justify-center md:justify-end">
              <div className="absolute inset-0 bg-[#a0b3f8] dark:bg-gray-700 transform -skew-x-12 -translate-x-1/3 hidden md:block"></div>
              <div className="absolute inset-0 bg-[#8da4f7] dark:bg-gray-600 transform skew-x-12 translate-x-1/2 hidden md:block"></div>

              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                src={item.img}
                alt={item.title}
                className="h-[250px] md:h-[450px] w-auto object-cover rounded-lg z-10"
              />
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
          {Imagelist.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                index === currentSlide
                  ? "bg-blue-500"
                  : "bg-gray-400 dark:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
