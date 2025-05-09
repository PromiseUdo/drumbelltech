import React from "react";
import About from "./components/about";
import WhyDrumbellTech from "./components/why-drumbelltech";
import OurImpact from "./components/our-impact";
import Banner from "./components/banner";

const page = () => {
  return (
    <div>
      <div className="border-b border-gray-300 flex flex-col items-center w-full">
        <Banner />
        <About />
        <WhyDrumbellTech />
        <OurImpact />
      </div>
    </div>
  );
};

export default page;
