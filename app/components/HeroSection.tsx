import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className=" flex px-4 sm:px-8 md:px-16 lg:px-32 mx-auto h-[600px]">
      {/* <div className="flex flex-col md:flex-row justify-between items-center bg-slate-200 text-black h-auto md:h-[600px] py-8 sm:py-12 md:py-16 overflow-hidden"> */}
        {/* Hero Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 px-4 md:px-8 w-full md:w-1/2">
          <p className="text-2xl tracking-widest leading-none ml-24">Welcome to Chairy</p>
          <h1 className="self-stretch mt-6 ml-24 text-6xl font-bold leading-[66px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
            Best Furniture 
            <br />
            Collection For Your
            <br />
            Interior
          </h1>
          <button className="flex gap-4 mt-8 ml-28 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition-all duration-300">
            Shop Now
            <FaArrowRight size={20} color="white" />
          </button>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <Image
            src="/Product Image.png"
            alt="Chair"
            width={400}
            height={200}
            className="w-full max-w-[230px] md:max-w-lg lg:max-w-[500px] object-contain"
          />
        </div>
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
