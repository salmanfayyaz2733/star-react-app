import React from "react";

const Suscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20
     bg-slate-700 dark:bg-gray-800 text-white mt-2"
    >
      <div className="container backdrop-blur-sm py-10 ">
        <div className="space-y-6 mx-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold ml-2">
            Get Notified For Any Problem!
          </h1>
          <input
            type="email"
            data-aos="fade-up"
            placeholder="Enter your E-mail"
            className="w-full py-2 text-black ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Suscribe;
