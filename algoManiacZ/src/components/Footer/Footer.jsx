import React from "react";
import { Link } from "react-scroll";
import {
  BsGoogle,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import { RiArrowUpCircleFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="contactus">
      <footer className="py-4 text-white bg-[#0e0b10]">
        <h1 className="text-4xl text-[#aeadaa] text-center font-bold mt-10 mb-6">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between text-[#aeadaa] mb-6">
          <div className="text-center flex-1 my-3">
            <h3 className="text-3xl font-bold mb-1">Akshat Chaube</h3>
            <p className="mb-2">+91 8826061898</p>
          </div>

          <div className="text-center flex-1 my-3">
            <h3 className="text-3xl font-bold mb-1">Himank Gupta</h3>
            <p className="mb-2">+91 9871262192</p>
          </div>
        </div>

        <div className="text-center">
          <div className="container mx-auto flex justify-center">
            <a href="">
              <BsYoutube
                className="text-[#aeadaa] ml-4 mr-4 mb-4 hover:text-[#d1d5db] cursor-pointer"
                size="2.2rem"
              />
            </a>
            <a href="">
              <BsInstagram
                className="text-[#aeadaa] ml-4 mr-4 mb-4 hover:text-[#d1d5db] cursor-pointer"
                size="2rem"
              />
            </a>
            <a href="">
              <BsLinkedin
                className="text-[#aeadaa] ml-4 mr-4 mb-4 hover:text-[#d1d5db] cursor-pointer"
                size="2rem"
              />
            </a>
            <a href="">
              <BsGithub
                className="text-[#aeadaa] ml-4 mr-4 mb-4 hover:text-[#d1d5db] cursor-pointer"
                size="2rem"
              />
            </a>
            <a href="">
              <BsGoogle
                className="text-[#aeadaa] ml-4 mr-4 mb-4 hover:text-[#d1d5db] cursor-pointer"
                size="2rem"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-[#aeadaa] mb-6">
          <div className="text-center px-2 md:px-28 my-3">
            <p className="mb-2">Made with ❤️ by AlgoManiacZ Community</p>
          </div>

          <div className="text-center px-2 md:px-28 my-3">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <RiArrowUpCircleFill
                className="mb-2 text-[#803502] hover:text-[#b45309] cursor-pointer"
                size="2.5rem"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
