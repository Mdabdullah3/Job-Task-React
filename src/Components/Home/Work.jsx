import React from "react";
import work from "../../Assets/hybridwork.png.png";
const Work = () => {
  return (
    <div className="flex items-center justify-between w-9/12 mt-10 mx-auto text-secondary">
      <div className="flex-1">
        <h1 className="text-4xl leading-tight tracking-wider font-bold">
          Work together, <br /> wherever you work
        </h1>
        <p className=" tracking-wider text-gray-500 mt-3 w-10/12">
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
        </p>
        <button className="mt-7 text-primary tracking-wider cursor-pointer">
          <span className="underline mr-2">Learn More</span> &#8594;
        </button>
      </div>
      <div className="flex-1 mx-auto">
        <img src={work} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Work;
