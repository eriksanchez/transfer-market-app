import React from "react";

import NewsSlider from "./NewsSlider";
import MSP from "./MSP";
import NewsCon from "./NewsCon/index";

const Home = () => {
  return (
    <div>
      <div>
        <NewsSlider />
        <MSP />
      </div>
      <div>
        <NewsCon />
      </div>
    </div>
  );
};

export default Home;
