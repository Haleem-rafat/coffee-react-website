import React from "react";
import img_1 from "../Assets/Image 9.png";
import img_2 from "../Assets/Image 10.png";
import img_3 from "../Assets/Image 8.png";
import img_4 from "../Assets/Image 7.png";

const shop = () => {
  return (
    <div id="About Us" className="bg-[#2a2e34] text-white ">
      <div className="max-w-7xl mx-auto py-16">
        <div className=" flex flex-col ">
          <h3 className=" flex justify-center text-5xl py-4 font-bold">
            Our Shop
          </h3>
          <div className="py-9 text-sm">
            <p className="flex justify-center mx-auto">
              The quality of coffee can vary greatly depending on how it is
              processed
            </p>
            <p className="flex justify-center mx-auto">
              and how the coffee beans were grown. Usually
            </p>
          </div>
        </div>
        <div className="grid  md:grid-cols-3  justify-items-center  gap-5">
          <div className=" col-span-2  ">
            <img
              className="object-cover w-full h-full md:mx-4 mx-0"
              src={img_1}
              alt=""
            />
          </div>
          <div>
            <img className="object-cover w-full h-full  " alt="" src={img_2} />
          </div>
          <div>
            <img
              className="object-cover w-full h-full md:mx-12 mx-0 "
              alt=""
              src={img_3}
            />
          </div>
          <div className="col-span-2  ">
            <img
              className="object-cover w-full h-full md:ml-7 ml-0"
              alt=""
              src={img_4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
