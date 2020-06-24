import React from "react";
import { Router, Route } from "react-router-dom";

import history from "./history";
import Home from "../Home";
import Login from "../Login";
import PlayerList from "../PlayerList";
import Competitions from "../Competitions";

const Routers = () => (
  <Router history={history}>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/playerlist" component={PlayerList} />
    <Route exact path="/competitions" component={Competitions} />
  </Router>
);

export default Routers;
