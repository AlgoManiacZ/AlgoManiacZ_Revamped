import React from 'react'
import {
  BsGoogle,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
} from 'react-icons/bs'
import { RiArrowUpCircleFill } from 'react-icons/ri'

export default function Footer() {
  return (
    <>
      <footer className="py-4 text-textColor bg-backgroundBody">
        <h1 className="text-4xl text-center font-bold mt-10 mb-6">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between text-text mb-6">
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
                className="text-textColor ml-4 mr-4 mb-4 hover:text-hoverTextColor cursor-pointer"
                size="2.2rem"
              />
            </a>
            <a href="">
              <BsInstagram
                className="text-textColor ml-4 mr-4 mb-4 hover:text-hoverTextColor cursor-pointer"
                size="2rem"
              />
            </a>
            <a href="">
              <BsLinkedin
                className="text-textColor ml-4 mr-4 mb-4 hover:text-hoverTextColor cursor-pointer"
                size="2rem"
              />
            </a>
            <a href="">
              <BsGithub
                className="text-textColor ml-4 mr-4 mb-4 hover:text-hoverTextColor cursor-pointer"
                size="2rem"
              />
            </a>
            <a href="">
              <BsGoogle
                className="text-textColor ml-4 mr-4 mb-4 hover:text-hoverTextColor cursor-pointer"
                size="2rem"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-textColor mb-6">
          <div className="text-center px-2 md:px-28 my-3">
            <p className="mb-2">Made with ❤️ by AlgoManiacZ Community</p>
          </div>

          <div className="text-center px-2 md:px-28 my-3">
            <button className="mb-2 text-orange hover:text-hoverOrange cursor-pointer">
              <RiArrowUpCircleFill size="2.5rem" />
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
