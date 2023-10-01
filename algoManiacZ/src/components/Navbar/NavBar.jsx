import { useState } from 'react'
import logo from '../../assets/logo.jpeg'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-[#0e0b10] w-full sticky  z-10 top-0 text-white p-4 drop-shadow-[0_20px_20px_rgba(0,0,0,1)]">
      <div className="container mx-auto max-w-[1400px] flex justify-between items-center">
        <img
          src={logo}
          alt=""
          className="w-12 h-12 rounded-3xl"
        />

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="lg:flex text-center items-center">
            <li className="lg:mb-0 lg:ml-6">
              <a
                href="#"
                className="block text-white hover:text-blue-200 font-thin py-2 px-4"
              >
                Home
              </a>
            </li>
            <li className="lg:mb-0 lg:ml-6">
              <a
                href="#"
                className="block text-white hover:text-blue-200 font-thin py-2 px-4"
              >
                About
              </a>
            </li>
            <li className="lg:mb-0 lg:ml-6">
              <a
                href="#"
                className="block text-white hover:text-blue-200 font-thin py-2 px-4"
              >
                Services
              </a>
            </li>
            <li className="lg:mb-0 lg:ml-6">
              <a
                href="#"
                className="block text-white hover:text-blue-200 font-thin py-2 px-4 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
              assNam{' '}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
