import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showSolutionDropdown, setShowSolutionDropdown] = useState(false);

  return (
    <div className="w-11/12 mx-auto flex items-center justify-between mt-2 font-serif">
      <div className="flex items-center gap-8 text-secondary">
        <div>
          <img src={logo} className="" alt="" />
        </div>
        <div className="mt-2 flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setShowProductDropdown(!showProductDropdown)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <span>Product</span>
              <MdKeyboardArrowDown />
            </button>
            {showProductDropdown && (
              <div className="absolute  bg-white shadow-lg rounded-md py-1 w-36">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option 2
                </a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowSolutionDropdown(!showSolutionDropdown)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <span>Solution</span>
              <MdKeyboardArrowDown />
            </button>
            {showSolutionDropdown && (
              <div className="absolute mt-1 bg-white shadow-lg rounded-md py-1 w-36">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option 2
                </a>
              </div>
            )}
          </div>
          <div className="flex gap-4 tracking-wide items-center">
            <h1>Resources</h1>
            <h1>Enterprise</h1>
            <h1>Pricing</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center mt-2">
        <h1 className="flex items-center gap-1">
          <TbWorld size={20} /> EN
        </h1>
        <h1>Contact Sales</h1>
        <h1>Login</h1>
        <button className="px-6 py-3 bg-primary text-white rounded-full">
          Sign up Free &#8594;
        </button>
      </div>
    </div>
  );
};

export default Navbar;
