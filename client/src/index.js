import React from "react";
import ReactDOM from "react-dom";

import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import rootReducer from "./Redux/reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
