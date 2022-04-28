import React from "react";
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#253046]">
      <div className="max-w-[1024px] mx-auto text-white md:flex md:justify-between py-16 border-b-2 border-gray-300  ">
        <div className="mx-16">
          <h3 className="py-4 text-4xl font-bold">Coffee House</h3>
          <p className="text-sm text-gray-300">
            HUMAN beings tend to take<br></br> their five basic senses pretty
            <br></br>
            much for granted.
          </p>
          <div className=" flex justify-between py-6">
            <BsFacebook className="text-2xl text-gray-300 hover:text-[#ff4600]" />
            <BsInstagram className="text-2xl text-gray-300 hover:text-[#ff4600]" />
            <BsWhatsapp className="text-2xl text-gray-300 hover:text-[#ff4600]" />
            <BsTwitter className="text-2xl text-gray-300 hover:text-[#ff4600]" />
            <BsLinkedin className="text-2xl text-gray-300 hover:text-[#ff4600]" />
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10 mx-16">
          <ul>
            <li className="text-2xl py-4 ">About</li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              HUMAN
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              Beings
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              basic
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              granted
            </li>
          </ul>
          <ul>
            <li className="text-2xl py-4">Contact</li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              HUMAN
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              Beings
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              basic
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              granted
            </li>
          </ul>
          <ul>
            <li className="text-2xl py-4">Address</li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              HUMAN
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              Beings
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              basic
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              granted
            </li>
          </ul>
          <ul>
            <li className="text-2xl py-4">Blog</li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              HUMAN
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              Beings
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              basic
            </li>
            <li className="text-sm text-gray-300 py-1 cursor-pointer hover:text-[#ff4600]">
              granted
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center py-16 text-gray-300 text-sm">
        <p>2022, All rights powered by Haleem Rafat</p>
      </div>
    </div>
  );
};

export default Footer;
