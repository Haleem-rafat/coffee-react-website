import React from "react";
import img_1 from "../Assets/Imag 1.png";

const Hero = () => {
  return (
    <div className="bg-black text-white  ">
      <div className=" md:grid md:grid-cols-2 mx-auto max-w-[1240px] grid-cols-1 pt-24  mb-[-90px]">
        <div className=" flex flex-col mx-16 py-24  ">
          <h1 className="md:text-6xl text-4xl font-bold">
            A Cup Of Coffee Can Complete your day
          </h1>
          <p className="text-sm py-10 pr-8">
            The quality of coffee can vary greatly depending on how it is
            processed and how the coffee beans were grown. Usually, synthetic
            pesticides and other non-
          </p>
          <button className=" bg-[#ff4600] py-4 px-8 rounded-lg mt-24 hover:bg-white hover:text-[#ff4600] max-w-[170px]">
            Get Started
          </button>
        </div>
        <div className="py-8  md:w-full items-center mx-auto ">
          <img className=" bg-cover" src={img_1} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
