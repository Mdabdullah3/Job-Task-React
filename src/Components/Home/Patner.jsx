import React from "react";
import patner from "../../Assets/Walmart_Index_Only.svg.png";
import patner1 from "../../Assets/cisco.svg.png";
import patner2 from "../../Assets/Volvo_Index_Only.svg.png";
import patner3 from "../../Assets/Vector.png";
import patner4 from "../../Assets/deloitte.svg.png";
const Patner = () => {
  const image = [patner, patner1, patner2, patner3, patner4];
  return (
    <div className="w-9/12 mx-auto mt-20 lg:mt-28">
      <h1 className="text-gray-500 text-center tracking-wider">
        Trusted By 45M+ User
      </h1>
      <div className="grid grid-cols-2 items-center mt-10 gap-10 md:grid-cols-3 lg:grid-cols-5">
        {image.map((img) => (
          <div>
            <img src={img} alt="" className="mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patner;
