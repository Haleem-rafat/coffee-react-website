import React from "react";
import img_3 from "../Assets/Image 3 .png";

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 mx-16 ">
        <div className="py-24">
          <h2 className="text-3xl font-bold">Our service is just for you</h2>
          <p className=" text-sm text-gray-500 py-8">
            The quality of coffee can vary greatly depending on how it is
            processed and how the coffee beans were grown. Usually, synthetic
          </p>
          <div className="flex py-8 justify-between">
            <div>
              <h2 className="text-3xl font-bold">1.11K</h2>
              <p className=" text-sm text-gray-500">Customer</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className=" text-sm text-gray-500">Event Spce</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">09</h2>
              <p className=" text-sm text-gray-500">Branch </p>
            </div>
          </div>
        </div>
        <div className=" mx-auto">
          <img className="" src={img_3} />
        </div>
      </div>
    </div>
  );
};

export default Service;
