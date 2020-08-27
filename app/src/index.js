import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { appReducer } from "./reducers";
import thunk from "redux-thunk";

import Title from "./components/Title";
import Dog from "./components/Dog";

let store = createStore(appReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Title />
      <Dog />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);