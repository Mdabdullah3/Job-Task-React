import React from "react";
import vmware from "../../Assets/vmware.png";
import frog from "../../Assets/frog.png";
import docusing from "../../Assets/docusing.png";
import avatar from "../../Assets/team.png";
import avatar1 from "../../Assets/team1.png";
import avatar2 from "../../Assets/team2.png";
const Stories = () => {
  const stories = [
    {
      id: 1,
      img: vmware,
      text: "“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”",
      userName: "Roxanne Mustafa",
      postion: "Design Team Lead at VMware",
      avatar: avatar,
    },
    {
      id: 2,
      img: docusing,
      text: "“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”",
      userName: "Jane Ashley",
      postion: "Head of Design at DocuSign",
      avatar: avatar1,
    },
    {
      id: 1,
      img: frog,
      text: "“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”",
      userName: "Laura Baird",
      postion: "Associate Design Director at frog",
      avatar: avatar2,
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-wider text-center mt-20 md:mt-32">
        Loved by the world's best teams
      </h1>
      <div className="flex items-center justify-center mt-5">
        <button className="px-6 py-3 rounded-full border-[1px] border-primary text-primary tracking-wider">
          See all customer stories &#8594;
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-9/12 mx-auto mt-20 gap-10">
        {stories.map((story) => (
          <div key={story.id} className="w-11/12 mx-auto">
            <img src={story.img} alt="" className="w-8/12 mb-7" />
            <p className="text-gray-500 tracking-wider  lg:h-40">
              {story.text}
            </p>
            <div className="md:mt-10 mt-4 flex items-center gap-4">
              <img src={story.avatar} alt="" />
              <div className="text-gray-500 tracking-wider text-[13px]">
                <h1>{story.userName}</h1>
                <h1>{story.postion}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
