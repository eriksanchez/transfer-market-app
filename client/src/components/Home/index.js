import React from "react";

import NewsSlider from "./NewsSlider";
import MSP from "./MSP";
import NewsCon from "./NewsCon/index";
import SmallerNews from "./SmallerNews";

const Home = () => {
  return (
    <div>
      <div style={{ display: "flex " }}>
        <NewsSlider />
        <MSP />
      </div>
      <div style={{ backgroundColor: "rgba(255,255,255)" }}>
        <NewsCon />
        <NewsCon />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SmallerNews />
          <SmallerNews />
        </div>
      </div>
    </div>
  );
};

export default Home;
