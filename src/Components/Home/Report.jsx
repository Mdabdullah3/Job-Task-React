import React from "react";
import reportImg from "../../Assets/snap.png";
const Report = () => {
  return (
    <div>
      <div className="md:w-9/12 w-11/12 mx-auto mt-10 relative">
        <img src={reportImg} alt="" />
        <div className=" tracking-wider absolute top-10 md:top-32 lg:top-52 right-5 md:right-20 text-center">
          <h1 className="md:text-xl text-sm font-bold">The Ways We Work</h1>
          <h2 className=" tracking-wider py-2 sm:text-[12px]">
            How has our relationship with work changed?
          </h2>
          <button className="md:px-8 px-4 rounded-full tracking-wider py-2 md:py-3 bg-primary text-white">
            View the report &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
