import React from "react";
import social from "../assets/hero-removebg-preview.png";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="md:w-11/12 mx-auto relative  flex flex-col lg:flex-row items-center justify-between  py-12 px-5  mt-16"
    >
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-xl md:text-4xl font-semibold md:font-bold text-white leading-snug">
          Seamlesly Manage your Online Reputation & Review Management and
          respond to every customer across all review platforms from a
          single interface. <br />{" "}
          <span className="text-blue-500">Powered by AI</span>
        </h1>
        <p className="text-gray-300 leading-relaxed">
          Monitor and manage your online presence, respond to reviews and
          comments effortlessly, and maintain a consistent brand image –{" "}
          <span className="italic">all from one intuitive platform</span>.
        </p>
        <a href="/contact">
          <button className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Contact Us
          </button>
        </a>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
        <img
          src={social} // Replace with your actual image URL
          alt="Happy User"
          className="w-80 mx-auto md:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
