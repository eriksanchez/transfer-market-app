import { combineReducers } from "redux";

import PlayerListReducer from "./PlayerListReducer";

const rootReducer = combineReducers({
  PlayerList: PlayerListReducer,
});

export default rootReducer;
