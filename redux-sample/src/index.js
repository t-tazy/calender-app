import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { rootReducer } from "./redux/rootReducer";
import { ContainerCounter } from "./components/Counter/container";

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <ContainerCounter />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
