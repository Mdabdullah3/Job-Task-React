import React from "react";
import logo from "../Assets/logo.png";
import { TbWorld } from "react-icons/tb";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto flex items-center justify-between mt-2 font-serif">
      <div className="flex items-center gap-8 text-secondary">
        <div>
          <img src={logo} className="" alt="" />
        </div>
        <div className="flex gap-4 tracking-wide items-center mt-2">
          <h1>Product</h1>
          <h1>Solution</h1>
          <h1>Resources</h1>
          <h1>Enterprise</h1>
          <h1>Pricing</h1>
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
