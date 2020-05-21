import React from "react";

import NewsSlider from "./NewsSlider";
import MSP from "./MSP";
import NewsCon from "./NewsCon/index";

const Home = () => {
  return (
    <div>
      <div style={{ display: "flex " }}>
        <NewsSlider />
        <MSP />
      </div>
      <div style={{ backgroundColor: "rgba(255,255,255)" }}>
        <NewsCon />
      </div>
    </div>
  );
};

export default Home;
