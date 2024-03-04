import React from "react";
import uiux from "../../Assets/uxdesignwithoutshadow.jpg.png";
import { IoCheckmarkSharp } from "react-icons/io5";
import icons from "../../Assets/div.png";
const Team = () => {
  return (
    <div className="md:w-9/12 w-11/12 mx-auto mt-20">
      <h1 className="text-4xl font-bold tracking-wider">
        Built for all kinds of teams
      </h1>
      <div className="mt-8 ">
        <div className="tracking-wider space-y-3">
          <button className="px-5 py-3 rounded-full border-[1px] border-[#F1F3FD] bg-[#F1F3FD] mr-2">
            UX & Design
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Marketing
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Product Management
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Engineering
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Consultants
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Agile Coaches
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Sales
          </button>
        </div>
      </div>
      <div className="lg:flex justify-between mt-10 items-start">
        <div className="flex-1 mt-4 tracking-wider">
          <h1 className="flex items-center gap-4">
            <IoCheckmarkSharp />{" "}
            <span className="text-gray-500">Build low-fi wireframes</span>
          </h1>
          <h1 className="flex items-center gap-4 my-3">
            <IoCheckmarkSharp />
            <span className="text-gray-500">
              Involve stakeholders in the design process
            </span>
          </h1>
          <h1 className="flex items-center gap-4">
            <IoCheckmarkSharp />{" "}
            <span className="text-gray-500">Run engaging design workshops</span>
          </h1>
          <button className="mt-7  tracking-wider  text-primary">
            Learn More &#8594;
          </button>
          <div className="mt-7">
            <h1 className="mb-2 text-gray-500">
              Integrate your favorite tools
            </h1>
            <img src={icons} alt="" />
          </div>
        </div>
        <div className="flex-2">
          <img src={uiux} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Team;
