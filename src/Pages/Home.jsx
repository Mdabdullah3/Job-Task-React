import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "../Components/Home/Banner";
import Patner from "../Components/Home/Patner";
import Trusted from "../Components/Home/Trusted";
import Work from "../Components/Home/Work";
import Snap from "../Components/Home/Snap";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Patner />
      <Trusted />
      <Work />
      <Snap />
    </div>
  );
};

export default Home;
