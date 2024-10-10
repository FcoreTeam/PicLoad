import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers/main-reducer";

const store = configureStore({
  reducer: {
    mainPage: mainReducer,
  },
});
export default store;
