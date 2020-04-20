import React from "react";

import Routers from "./Routers";

//Test
import Example from "./Home/Example";
const App = () => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/Transfermarkt_Logo.png"}
        alt="logo"
      />
      <Example />
      <Routers />
    </div>
  );
};

export default App;
