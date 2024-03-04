import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="w-11/12 mx-auto flex items-center justify-between mt-2 mb-4">
        <div className="flex items-center gap-8 text-secondary">
          <div>
            <img src={logo} className="-mt-2" alt="" />
          </div>
          <div className="lg:flex hidden items-center gap-3 tracking-wider">
            <div className="relative">
              <button
                onClick={() => {}}
                className="flex items-center gap-2 focus:outline-none"
              >
                <span>Product</span>
                <MdKeyboardArrowDown />
              </button>
              {/* Dropdown content */}
            </div>
            <div className="relative">
              <button
                onClick={() => {}}
                className="flex items-center gap-2 focus:outline-none"
              >
                <span>Solution</span>
                <MdKeyboardArrowDown />
              </button>
              {/* Dropdown content */}
            </div>
            <div className="hidden md:flex gap-4 tracking-wide items-center">
              <h1>Resources</h1>
              <h1>Enterprise</h1>
              <h1>Pricing</h1>
            </div>
          </div>
        </div>
        <div className="lg:flex gap-4 items-center mt-2 tracking-wider hidden">
          <h1 className="flex items-center gap-1">
            <TbWorld size={20} /> EN
          </h1>
          <h1>Contact Sales</h1>
          <h1>Login</h1>
          <button className="px-6 py-3 bg-primary text-white rounded-full">
            Sign up Free &#8594;
          </button>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-secondary focus:outline-none mt-3"
          >
            {showMenu ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="lg:hidden w-full bg-[#02033B] text-white py-4 text-center fixed top-0 left-0 z-50 ">
          <div className="flex justify-end pr-4">
            <button onClick={toggleMenu} className="focus:outline-none">
              <MdClose size={24} />
            </button>
          </div>
          {/* Include links for the mobile menu */}
          <div className="z-10">
            <div className="flex flex-col items-center gap-3 tracking-wider">
              <div className="relative">
                <button
                  onClick={() => {}}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <span>Product</span>
                  <MdKeyboardArrowDown />
                </button>
                {/* Dropdown content */}
              </div>
              <div className="relative">
                <button
                  onClick={() => {}}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <span>Solution</span>
                  <MdKeyboardArrowDown />
                </button>
                {/* Dropdown content */}
              </div>
              <div className="flex flex-col gap-4 tracking-wide items-center">
                <h1>Resources</h1>
                <h1>Enterprise</h1>
                <h1>Pricing</h1>
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
          </div>
        </div>
      )}
      <hr />
    </nav>
  );
};

export default Navbar;
