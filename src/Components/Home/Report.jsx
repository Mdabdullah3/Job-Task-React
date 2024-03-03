import React from "react";
import reportImg from "../../Assets/snap.png";
const Report = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto mt-16 relative">
        <img src={reportImg} alt="" />
        <div className=" tracking-wider absolute top-52 right-20 text-center">
          <h1 className="text-xl font-bold">The Ways We Work</h1>
          <h2 className=" tracking-wider py-2">
            How has our relationship with work changed?
          </h2>
          <button className="px-8 rounded-full tracking-wider py-3 bg-primary text-white">
            View the report &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
