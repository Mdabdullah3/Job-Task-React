import React from "react";
import banner from "../../Assets/headerimage-without-text.png.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import review from "../../Assets/rate.png";
const Banner = () => {
  return (
    <div className="md:w-[81%] w-11/12 mx-auto lg:flex items-center justify-between mt-14">
      <div className="flex-1">
        <h1 className="md:text-5xl text-3xl w-9/12 font-bold tracking-wider leading-tight">
          Take ideas from better to best
        </h1>
        <p className="text-lg tracking-wider w-9/12 mt-3 text-gray-500">
          Miro is your team's visual platform to connect, collaborate, and
          create — together.
        </p>
        <div className="w-9/12 mt-5">
          <input
            placeholder="Enter your work email"
            type="email"
            name=""
            id=""
            className="input input-bordered w-full rounded-full mb-3 tracking-wider"
          />
          <button className="bg-primary w-full tracking-wider py-3 rounded-full text-white">
            Sign Up Free &#8594;
          </button>
          <p className=" tracking-wider text-gray-400 mt-1">
            Collaborate with your team within minutes
          </p>
          <div className="bg-gray-200 rounded-lg mt-3 md:mt-8 px-4 py-3 w-10/12 md:flex items-center justify-between">
            <div>
              <h1 className="flex items-center gap-1 text-orange-400">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
              </h1>
              <p className="text-[13px] tracking-wider">
                Based on 5149+ reviews :
              </p>
            </div>
            <img src={review} alt="" className="w-full -ml-4 md:-ml-0" />
          </div>
        </div>
      </div>
      <div className="flex-1 lg:mt-0 mt-5">
        <img src={banner} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Banner;
