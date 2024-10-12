import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store.js";

import App from "./components/app/App";

import "./index.scss";
import { checkMemory} from "./store/utils/mainUtils.js";

createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

checkMemory()