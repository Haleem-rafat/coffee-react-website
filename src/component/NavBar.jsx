import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const NavBar = () => {
  const [nav, NavSet] = useState(false);

  const handelNav = () => {
    NavSet(!nav);
  };

  const onRouteClick = (e, { name, route }) => {
    const anchor = document.querySelector(route);
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="  bg-black text-white mx-auto">
      <div className="max-w-[1240px] mx-auto flex justify-between ">
        <div>
          <img className="w-12 py-8 mx-16 my-2  " src={logo} />
        </div>
        <div className="py-8 ">
          <ul className=" hidden md:flex    ">
            <a
              href="#Home"
              onClick={onRouteClick}
              className="px-6 pt-4 hover:text-[#ff4600] cursor-pointer"
            >
              Home
            </a>
            <span className="pt-4 ">|</span>
            <a
              href="#About Us"
              onClick={onRouteClick}
              className="px-6 pt-4 hover:text-[#ff4600] cursor-pointer"
            >
              About Us
            </a>
            <span className="pt-4 ">|</span>
            <a
              href="#Catagory"
              onClick={onRouteClick}
              className="px-6 pt-4 hover:text-[#ff4600] cursor-pointer"
            >
              Catagory
            </a>
            <span className="pt-4 ">|</span>
            <a
              href="#Faciluty"
              onClick={onRouteClick}
              className="px-6 pt-4 hover:text-[#ff4600] cursor-pointer"
            >
              Faciluty
            </a>

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
              ? "fixed flex flex-col left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <img className="w-12 py-8 mx-8 my-4  " src={logo} alt="" />
          <a
            href="#Home"
            onClick={onRouteClick}
            className="px-6 pt-4 border-b hover:border-b-[#ff4600] mx-4 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#About Us"
            onClick={onRouteClick}
            className="px-6 pt-4 border-b hover:border-b-[#ff4600] mx-4 cursor-pointer"
          >
            About Us
          </a>
          <a
            href="#Catagory"
            onClick={onRouteClick}
            className="px-6 pt-4 border-b hover:border-b-[#ff4600] mx-4 cursor-pointer"
          >
            Catagory
          </a>
          <a
            href="#Faciluty"
            onClick={onRouteClick}
            className="px-6 pt-4 border-b hover:border-b-[#ff4600] mx-4 cursor-pointer"
          >
            Faciluty
          </a>
          <button className=" bg-[#ff4600] py-4 px-8 rounded-lg mr-16  my-6 mx-2 hover:bg-white hover:text-[#ff4600]">
            Contact Us
          </button>
        </ul>
      </div>
    </div>
  );
};
