import React from "react";
import patner from "../../Assets/Walmart_Index_Only.svg.png";
import patner1 from "../../Assets/cisco.svg.png";
import patner2 from "../../Assets/Volvo_Index_Only.svg.png";
import patner3 from "../../Assets/Vector.png";
import patner4 from "../../Assets/deloitte.svg.png";
const Patner = () => {
  const image = [patner, patner1, patner2, patner3, patner4];
  return (
    <div className="w-9/12 mx-auto mt-28">
      <h1 className="text-gray-500 text-center tracking-wider">
        Trusted By 45M+ User
      </h1>
      <div className="flex items-center justify-between mt-10 flex-wrap">
        {image.map((img) => (
          <div>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patner;
