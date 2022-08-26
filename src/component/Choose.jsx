import React from "react";
import img_2 from "../Assets/Image 2.png";

const Choose = () => {
  return (
    <div id="Faciluty" className="bg-white  ">
      <div className=" grid md:grid-cols-2 md:max-w-7xl mx-auto py-24 gap-2">
        <div className="mx-16 ">
          <img src={img_2} />
        </div>
        <div className=" mx-16 py-16 ">
          <p className="py-4 text-gray-500 items-center">our Coffee</p>
          <h2 className="py-4  font-bold text-3xl">
            Choose Your Favorite Black Coffee
          </h2>
          <p className="py-6 text-sm text-gray-500 ">
            The quality of coffee can vary greatly depending on how it is
            processed and how the coffee beans were grown. Usually, synthetic
          </p>
          <button className=" bg-[#ff4600] text-white py-4 px-8 rounded-lg  hover:bg-black hover:text-[#ff4600] ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Choose;
