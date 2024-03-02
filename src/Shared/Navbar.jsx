import React from "react";
import logo from "../Assets/logo.png";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto flex items-center justify-between mt-3">
      <div className="flex items-center gap-6">
        <div>
          <img src={logo} className="" alt="" />
        </div>
        <div className="flex items-center gap-4 tracking-wide">
          <h1>Product</h1>
          <h1>Solution</h1>
          <h1>Resources</h1>
          <h1>Enterprise</h1>
          <h1>Pricing</h1>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <h1>Contact Sale</h1>
        <h1>Login</h1>
        <button className="px-6 py-3 bg-primary text-white rounded-full">
          Sign up Free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
