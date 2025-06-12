import React from "react";
import heroImage from "/src/assets/hero-o4bu130g.png"; // adjust path if needed
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div className="flex flex-col-reverse md:flex-row items-center bg-pink-100 rounded-xl overflow-hidden">
        {/* Left: Text Content */}
        <div className="flex flex-col  items-center w-full md:w-1/2 text-center px-4 py-6 md:py-12 space-y-4">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-800">
            নতুন
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-pink-700">
            কালেকশন
          </p>
          <p className="text-sm sm:text-base md:text-lg text-zinc-800 md:w-[80%] mx-auto md:mx-0 ">
            ✨ <span className="text-pink-700 font-medium">GloreBD</span> - এর
            সাথে ফ্যাশনে পা রাখুন নতুন দিগন্তে!
            <br />
            ❤️ আমাদের এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ!
            <br />
            আপনার প্রিয় ফ্যাশন স্টাইল খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️
          </p>
          <div>
            <Link to="/collections">
              <button className="bg-pink-700 hover:bg-pink-800 transition text-white px-8 py-3 text-sm md:text-base rounded-lg shadow-lg cursor-pointer">
                অর্ডার করুন
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-4 pt-6 ">
          <img
            src={heroImage}
            alt="GloreBD"
            className="w-full h-1/2 max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
