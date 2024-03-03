import React from "react";
import image from "../../Assets/M3_integrations_all_integrations.png.png";
const Snap = () => {
  return (
    <div className="flex items-center justify-between w-9/12 mt-10 mx-auto text-secondary gap-20">
      <div className="flex-1">
        <img src={image} alt="" className="" />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl leading-tight tracking-wider font-bold">
          Connect
          <br />
          your tools, <br />
          close your tabs
        </h1>
        <p className=" tracking-wider text-gray-500 mt-3 w-10/12">
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom, Miro has 100+ integrations with tools you
          already use and love.
        </p>
        <button className="mt-7 text-primary tracking-wider cursor-pointer">
          <span className="underline mr-2">Learn More</span> &#8594;
        </button>
      </div>
    </div>
  );
};

export default Snap;
