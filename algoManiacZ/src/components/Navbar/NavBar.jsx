import { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.jpeg'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="h-28 bg-navbarColor w-full sticky z-10 top-0 flex px-5 md:px-20 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
        >
          <img
            src={logo}
            alt=""
            className="w-16  rounded-full cursor-pointer"
          />
        </Link>

        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-textColor  p-2 focus:outline-none z-30"
          >
            <svg
              className="w-8 h-8"
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

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          }  absolute lg:relative w-8/12 h-80 lg:w-auto right-0 top-[112px] lg:top-auto lg:translate-x-0  lg:flex lg:items-center custom-bg`}
        >
          <ul className="flex flex-col lg:flex-row w-full lg:w-auto items-center bg-gray-900 rounded-lg">
            <li className="my-3 lg:m-auto lg:ml-6">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="block text-textColor hover:underline underline-offset-4 font-bold cursor-pointer"
              >
                About us
              </Link>
            </li>
            <li className="my-3 lg:m-auto lg:ml-6">
              <Link
                to="speakers"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="block text-textColor hover:underline underline-offset-4 font-bold cursor-pointer"
              >
                Speakers
              </Link>
            </li>

            <li className="my-3 lg:m-auto lg:ml-6">
              <Link
                to="faq"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="block text-textColor hover:underline underline-offset-4 font-bold cursor-pointer"
              >
                FAQs
              </Link>
            </li>
            <li className="my-3 lg:m-auto lg:ml-6">
              <Link
                to="joinus"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="block text-textColor hover:underline underline-offset-4 font-bold cursor-pointer"
              >
                Join us
              </Link>
            </li>
            <li className="my-3 lg:m-auto lg:ml-6">
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="block text-texttext-textColor hover:underline underline-offset-4 font-bold cursor-pointer py-2 px-5 rounded-3xl  bg-gradient-to-r from-Navbar to-NavbarPurple"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
