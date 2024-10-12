import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice.js";
import photoSlice from "./slices/photoSlice.js";
import promocodeSlice from "./slices/promocodeSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    photos: photoSlice,
    promocode: promocodeSlice,
  },
});

export default store;
