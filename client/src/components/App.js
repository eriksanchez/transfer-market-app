import React from "react";

import Routers from "./Routers";

const App = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/Transfermarkt_Logo.png"} />
      <Routers />
    </div>
  );
};

export default App;
