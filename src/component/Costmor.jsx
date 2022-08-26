import React from "react";
import img_man from "../Assets/man_photo.png";
import img_man_2 from "../Assets/test_man.png";

const Costmor = () => {
  return (
    <div className="max-w-7xl mx-auto my-24 ">
      <div className=" grid md:grid-cols-2 items-center ">
        <div className="bg-[#2a2e34] border rounded-3xl w-72 h-96  mx-auto  relative">
          <div className=" absolute bottom-0 -right-10   ">
            <img className=" w-56" src={img_man_2} alt="" />
          </div>
        </div>
        <div className="mx-16 my-8">
          <p className="text-sm text-gray-500 py-4">Our Review</p>
          <h2 className="text-3xl py-4">
            Let our Customer <br></br> say About Us
          </h2>
          <p className="text-sm text-gray-500 py-4">
            The quality of coffee can vary greatly depending on how it is
            processed and how the coffee beans were grown. Usually, synthetic
            pesticides
          </p>
          <button className=" bg-[#ff4600] text-white py-4 px-8 rounded-lg my-4 hover:bg-black hover:text-[#ff4600] ">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Costmor;
