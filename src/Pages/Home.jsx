import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "../Components/Home/Banner";
import Patner from "../Components/Home/Patner";
import Trusted from "../Components/Home/Trusted";
import Work from "../Components/Home/Work";
import Snap from "../Components/Home/Snap";
import Report from "../Components/Home/Report";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Patner />
      <Trusted />
      <Work />
      <Snap />
      <Report />
    </div>
  );
};

export default Home;
