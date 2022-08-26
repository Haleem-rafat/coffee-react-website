import React from "react";
import img_1 from "../Assets/Image 12.png";
import img_2 from "../Assets/Image 13.png";
import { RiSendPlaneFill } from "react-icons/ri";

const Trening = () => {
  return (
    <div id="Catagory" className="max-w-7xl mx-auto py-16 ">
      <div className="mx-auto">
        <div>
          <h1 className=" md:text-6xl text-4xl  mx-16 md:mx-auto">
            Our Blog Coffee with trending <br></br>topic for this week
            <span className="text-[#c09d77]">______</span>{" "}
          </h1>
        </div>
      </div>
      <div className=" grid md:grid-cols-2  py-8 mx-auto gap-4">
        <div className="mx-auto">
          <div className=" relative">
            <img className="w-full object-cover" src={img_1} alt="" />
            <RiSendPlaneFill className=" absolute right-0  bottom-0 bg-[#ff4600] rounded-lg text-white text-4xl w-20 h-20 hover:text-[#ff4600] hover:bg-black" />
          </div>
          <div>
            <h2 className="py-4 text-3xl">12 Health Benefits of Coffee</h2>
            <p className="text-gray-500 text-sm">
              The quality of coffee can vary greatly depending on how it is
              processed and how the coffee beans were grown. Usually, synthetic
              pesticides
            </p>
          </div>
        </div>
        <div className=" mx-auto">
          <div className=" relative">
            <img className="w-full object-cover" src={img_2} alt="" />
            <RiSendPlaneFill className=" absolute right-0 bottom-0 bg-[#ff4600] rounded-lg text-white text-4xl w-20 h-20 hover:text-[#ff4600] hover:bg-black" />
          </div>
          <div>
            <h2 className="py-4 text-3xl">12 Health Benefits of Coffee</h2>
            <p className="text-gray-500 text-sm">
              The quality of coffee can vary greatly depending on how it is
              processed and how the coffee beans were grown. Usually, synthetic
              pesticides
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trening;
