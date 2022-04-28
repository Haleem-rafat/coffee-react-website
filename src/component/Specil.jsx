import React from "react";
import { GiMeepleArmy } from "react-icons/gi";
import { BiLayer, BiMessageAltCheck } from "react-icons/bi";

const Specil = () => {
  return (
    <div className="max-w-[1024px] mx-auto">
      <div className="mx-16 py-24">
        <div>
          <h1 className="text-4xl font-bold">
            Special Features that make you <br></br>Happy and cheer up!
            <span className="text-[#c09d77] font-bold "> -----</span>
          </h1>
        </div>
        <div className=" grid md:grid-cols-3 py-16 mx-auto ">
          <div className=" border-l-2 border-[#c09d77] px-4 my-2">
            <GiMeepleArmy className="text-[#c09d77]" size={40} />
            <h3 className="text-2xl font-bold py-4">Best Pleace</h3>
            <p className="text-gray-500 text-sm">
              The quality of coffee can vary<br></br> greatly depending on how
              it is<br></br> processed and how
            </p>
          </div>
          <div className=" border-l-2 border-[#c09d77] px-4 my-2">
            <BiMessageAltCheck className="text-[#c09d77]" size={40} />
            <h3 className="text-2xl font-bold py-4">Best Quality</h3>
            <p className="text-gray-500 text-sm">
              The quality of coffee can vary<br></br> greatly depending on how
              it is<br></br> processed and how
            </p>
          </div>
          <div className=" border-l-2 border-[#c09d77] px-4 my-2">
            <BiLayer className="text-[#c09d77]" size={40} />
            <h3 className="text-2xl font-bold py-4">The Best Price</h3>
            <p className="text-gray-500 text-sm">
              The quality of coffee can vary<br></br> greatly depending on how
              it is<br></br> processed and how
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specil;
