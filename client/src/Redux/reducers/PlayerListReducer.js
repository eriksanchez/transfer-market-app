const initialState = {
  PlayerList: [],
};

const PlayerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return {
        ...state,
        PlayerList: action.payload,
      };
    default:
      return state;
  }
};

export default PlayerListReducer;
