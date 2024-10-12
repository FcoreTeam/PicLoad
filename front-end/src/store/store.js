import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice.js"
import photoSlice from "./slices/photoSlice.js"

const store = configureStore({
  reducer: {
    user: userSlice,
    photos: photoSlice,
  },
});

export default store;
