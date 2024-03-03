import React from "react";
import BrainstormingImg from "../../Assets/Brainstormwithoutshadow.jpg.png";
const Service = () => {
  return (
    <div className="w-9/12 mx-auto mt-20">
      <h1 className="text-4xl font-bold tracking-wider">
        Built for the way you work
      </h1>
      <div className="mt-8 tracking-wider">
        <div>
          <button className="px-5 py-3 rounded-full border-[1px] border-[#F1F3FD] bg-[#F1F3FD] mr-2">
            Brainstorming
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Diagramming
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Meetings & Workshops
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Scrum Events
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Mapping
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Research & Design
          </button>
          <button className="px-5 py-3 rounded-full border-[1px] border-gray-300 mr-2">
            Strategic Planning
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-10 items-start">
        <div className="flex-1 mt-4 tracking-wider">
          <h1 className="text-lg">Brainstorming</h1>
          <p className="mt-10 w-9/12 text-gray-500">
            Unleash creative ideas and build on them with the help of sticky
            notes, images, mind maps, videos, drawing capabilities — the list
            goes on.
          </p>
          <button className="mt-4 bg-primary px-8 tracking-wider py-3 rounded-full text-white">
            Learn More &#8594;
          </button>
        </div>
        <div className="flex-2">
          <img src={BrainstormingImg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Service;
