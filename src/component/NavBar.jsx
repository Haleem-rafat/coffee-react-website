import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const NavBar = () => {
  const [nav, NavSet] = useState(false);

  const handelNav = () => {
    NavSet(!nav);
  };

  return (
    <div className="  bg-black text-white mx-auto">
      <div className="max-w-[1240px] mx-auto flex justify-between ">
        <div>
          <img className="w-12 py-8 mx-16 my-2  " src={logo} />
        </div>
        <div className="py-8 ">
          <ul className=" hidden md:flex justify-between ">
            <li className="px-6 pt-4 hover:text-[#ff4600] cursor-pointer">
              Home
            </li>
            <span className="pt-4 ">|</span>
            <li className="px-6 pt-4 hover:text-[#ff4600] cursor-pointer">
              About Us
            </li>
            <span className="pt-4">|</span>
            <li className="px-6 pt-4 hover:text-[#ff4600] cursor-pointer">
              Catagory
            </li>
            <span className="pt-4">|</span>
            <li className="px-6 pt-4 hover:text-[#ff4600] cursor-pointer">
              Faciluty
            </li>
            <button className=" bg-[#ff4600] py-4 px-8 rounded-lg mr-16 hover:bg-white hover:text-[#ff4600]">
              Contact Us
            </button>
          </ul>
          <div>
            <div className="py-4 mr-4 md:hidden" onClick={handelNav}>
              {nav ? (
                <AiOutlineClose size={35} className="hover:text-[#ff4600]" />
              ) : (
                <AiOutlineMenu size={35} className="hover:text-[#ff4600]" />
              )}
            </div>
          </div>
        </div>

        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <img className="w-12 py-8 mx-8 my-4  " src={logo} />
          <li className="px-6 pt-4 border-b hover:border-b-[#ff4600] mx-4 cursor-pointer">
            Home
          </li>
          <li className="px-6 pt-4 border-b hover:border-b-[#ff4600] mx-4 cursor-pointer">
            About Us
          </li>
          <li className="px-6 pt-4 border-b hover:border-b-[#ff4600] mx-4 cursor-pointer">
            Catagory
          </li>
          <li className="px-6 pt-4 border-b hover:border-b-[#ff4600] mx-4 cursor-pointer">
            Faciluty
          </li>
          <button className=" bg-[#ff4600] py-4 px-8 rounded-lg mr-16  my-6 mx-2 hover:bg-white hover:text-[#ff4600]">
            Contact Us
          </button>
        </ul>
      </div>
    </div>
  );
};
