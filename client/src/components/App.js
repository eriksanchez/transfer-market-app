import React from "react";

import NavBar from "./NavBar";
import Routers from "./Routers";

//Testing
import PlayerList from "./PlayerList/index";

const App = () => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/images/Transfermarkt_Logo.png"}
        alt="logo"
        style={{ height: 150, width: 300 }}
      />
      <NavBar />
      <PlayerList />
    </div>
  );
};

export default App;
