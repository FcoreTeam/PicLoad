import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice.js";
import photoSlice from "./slices/photoSlice.js";
import promocodeSlice from "./slices/promocodeSlice.js";
import popupsSlice from './slices/popupsSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    photos: photoSlice,
    promocode: promocodeSlice,
    popups: popupsSlice
  },
});

export default store;
