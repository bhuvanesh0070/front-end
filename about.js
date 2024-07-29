import React from "react";
import Image from "../../assets/4.png";

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-screen bg-orange-200">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center">
        <img
          src={Image}
          alt="About Us"
          className="w-full h-auto object-cover rounded-tr-full rounded-bl-full"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-8 bg-orange-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-orange-700 mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-8">
            Welcome to our premier real estate agency, where our mission is to provide exceptional service and expertise to help our clients achieve their real estate goals. With years of experience in the industry, our team of dedicated professionals has built a reputation for excellence and integrity.
            <br />
            <br />
            We are committed to staying up-to-date with the latest trends and technologies in the real estate market, and we use our knowledge and expertise to guide our clients through the buying and selling process with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
