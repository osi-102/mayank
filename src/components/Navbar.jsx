import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/b.jpeg";
import data from "./data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b border-neutral-900 rounded-4xl pb-4 sticky top-5 z-50 mb-20 flex items-center justify-between shadow-black shadow-xl bg-neutral-800">
      <div className="flex items-center justify-between w-full px-4 lg:px-8">
        <div className="flex items-center">
          <img className="w-16 rounded-4xl mt-4" src={logo} alt="logo" />
        </div>
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-2xl">
          <ul className="flex flex-row m-6 mt-8 gap-4">
            {data.map((item) => (
              <li key={item.id} className="hover:text-cyan-500">
                <Link to={item.link} className="cursor-pointer">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-neutral-800 w-full px-4">
          <ul className="flex flex-col gap-4 py-4 text-xl">
            {data.map((item) => (
              <li key={item.id} className="hover:text-cyan-500">
                <Link
                  to={item.link}
                  className="cursor-pointer"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
