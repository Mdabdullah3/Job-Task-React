import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "../Components/Home/Banner";
import Patner from "../Components/Home/Patner";
import Trusted from "../Components/Home/Trusted";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Patner />
      <Trusted />
    </div>
  );
};

export default Home;
