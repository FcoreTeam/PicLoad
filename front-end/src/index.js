import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "../src/components/app/App";
import reportWebVitals from "./reportWebVitals";

import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = (state) => {
  root.render(<App state={state} />);
};
store.subscribe(() => {
  renderApp(store.getState());
});
renderApp(store.getState());
reportWebVitals();
