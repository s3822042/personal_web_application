import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <nav className="w-full">
      <div className="container flex items-center justify-between px-6 mx-auto">
        <div className="flex items-center">
          <a href="/">
            <p className="ml-2 text-base font-bold text-gray-800 lg:ml-4 lg:text-2xl">
              Vo Thanh Luan
            </p>
          </a>
        </div>
        <div>
          <div
            onClick={() => setShow(!show)}
            className="text-gray-500 sm:block md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none"
          >
            <svg
              aria-haspopup="true"
              aria-label="Main Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={4} y1={8} x2={20} y2={8} />
              <line x1={4} y1={16} x2={20} y2={16} />
            </svg>
          </div>
          <div
            id="menu"
            className={show ? "lg:hidden block" : "md:block lg:block hidden"}
          >
            <div
              onClick={() => setShow(!show)}
              className="fixed top-0 z-30 block pt-3 text-gray-500 md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
            <ul className="fixed top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center py-8 text-3xl bg-white md:text-base md:flex md:flex-row md:relative">
              <li className="pt-10 text-gray-600 cursor-pointer hover:text-gray-800 md:ml-10 md:pt-0">
                <Link to="/about">About</Link>
              </li>
              <li className="pt-10 text-gray-600 cursor-pointer hover:text-gray-800 md:ml-10 md:pt-0">
                <Link to="/experience">Experience</Link>
              </li>
              <li className="pt-10 text-gray-600 cursor-pointer hover:text-gray-800 md:ml-10 md:pt-0">
                <Link to="/project">Project</Link>
              </li>
              <li className="pt-10 text-gray-600 cursor-pointer hover:text-gray-800 md:ml-10 md:pt-0">
                <Link to="/qualifications">Qualifications</Link>
              </li>
              <li className="pt-10 text-gray-600 cursor-pointer hover:text-gray-800 md:ml-10 md:pt-0">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
