import React from "react";
import image1 from "../Accets/one.jpg";
import image2 from "../Accets/two.jpg";
import image3 from "../Accets/three.jpg";
import image4 from "../Accets/four.jpg";
import { StarIcon } from "@heroicons/react/24/solid";

const productdata = [
  {
    id: 1,
    image: image1,
    rating: 5.0,
    title: "Skilled Workers",
    aosdelay: "0",
  },
  {
    id: 2,
    image: image2,
    rating: 4.5,
    title: "Trusted Service",
    aosdelay: "200",
  },
  {
    id: 3,
    image: image3,
    rating: 4.8,
    title: "Affordable Rates",
    aosdelay: "400",
  },
  {
    id: 4,
    image: image4,
    rating: 4.6,
    title: "Quick Booking",
    aosdelay: "600",
  },
];

const Product = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[900px] mx-auto mb-10">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Our Company
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-400 mt-2">
            At our company, we believe in delivering excellence through skilled
            professionals. From minor repairs to major projects, our team
            ensures timely, affordable, and reliable service. Your satisfaction
            is our top priority – because you deserve nothing but the best.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 mt-20">
            {productdata.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosdelay}
                key={data.id}
                className="p-3 border rounded-lg shadow-md"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-[290px] w-[225px] object-cover rounded-md"
                />
                <div className="mt-2">
                  <h3 className="font-bold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
