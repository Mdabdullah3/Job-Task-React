import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "../Components/Home/Banner";
import Patner from "../Components/Home/Patner";
import Trusted from "../Components/Home/Trusted";
import Work from "../Components/Home/Work";
import Snap from "../Components/Home/Snap";
import Report from "../Components/Home/Report";
import Service from "../Components/Home/Service";
import Team from "../Components/Home/Team";
import Stories from "../Components/Home/Stories";
import Footer from "../Shared/Footer";

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
      <Service />
      <Team />
      <Stories />
      <Footer />
    </div>
  );
};

export default Home;
