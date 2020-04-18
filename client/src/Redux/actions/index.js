import { ADD_PLAYER } from "./types";

import history from "../../components/Routers/history";

export const addPlayer = (player) => ({
  type: ADD_PLAYER,
  payload: player,
});
