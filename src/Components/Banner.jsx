import React from "react";
import img from "../Accets/banner.jpg";

import {
  HomeIcon,
  TruckIcon,
  TagIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <div className="min-h-[450px] flex justify-center mt-24 mb-2 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Image Section */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              className="w-full max-w-[500px] md:max-w-[600px] h-auto md:h-[350px] object-cover rounded-lg"
              src={img}
              alt="Winter Sale"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center gap-4 md:gap-6 text-center md:text-left">
            <h1 data-aos="fade-up" className="text-2xl md:text-4xl font-bold">
               Providing complete protection
              for your life and property.
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm md:text-base text-gray-600 tracking-wide leading-relaxed"
            >
              We are dedicated to providing exceptional services that meet the
              highest standards. Our team is committed to delivering solutions
              with integrity, reliability, and excellence.
            </p>

            {/* Icons Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div
                data-aos="fade-up"
                className="flex flex-col items-center md:items-start gap-2"
              >
                <HomeIcon className="h-10 w-10 p-2 rounded-full bg-blue-800 text-white" />
                <p className="text-xs md:text-sm">Quality Protect</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center md:items-start gap-2"
              >
                <CreditCardIcon className="h-10 w-10 p-2 rounded-full bg-orange-500 text-white" />
                <p className="text-xs md:text-sm">Easy Payment</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center md:items-start gap-2"
              >
                <TruckIcon className="h-10 w-10 p-2 rounded-full bg-yellow-500 text-white" />
                <p className="text-xs md:text-sm">Quick Action</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center md:items-start gap-2"
              >
                <TagIcon className="h-10 w-10 p-2 rounded-full bg-red-400 text-white" />
                <p className="text-xs md:text-sm">Contact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
