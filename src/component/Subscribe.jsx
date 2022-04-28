import React from "react";
import { GrSend } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";

const Subscribe = () => {
  return (
    <div className="max-w-[1024px] mx-auto  text-white py-24 rounded-lg">
      <div className=" md:rounded-3xl bg-[#2a2e34] py-24 max-w-[1024px] mx-auto">
        <div className="flex flex-col  ">
          <h3 className=" md:text-5xl md:mx-auto  mx-4 text-4xl ">
            Subscribe to Our News letter
          </h3>
          <div className="text-sm mx-auto py-8 ">
            <p>The quality of coffee can vary greatly depending on how it</p>
            <p className="mx-20">is processed and how the coffee</p>
          </div>
          <from className="mx-auto flex text-[#2a2e34] ">
            <input
              className="mx-auto px-4 rounded-l-lg "
              type="text"
              placeholder="Enter Your E-mail"
            />
            <button className="  ">
              <RiSendPlaneFill className="text-6xl  bg-[#ff4600] rounded-r-lg py-3 text-white  hover:text-[#ff4600] hover:bg-black" />
            </button>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
