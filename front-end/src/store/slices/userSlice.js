import { createSlice } from "@reduxjs/toolkit";

export const profileState = {
  avatar: null,
  name: "Testing Name",
  username: "@user",
  memoryUse: 0,
  memoryAll: 1,
  memoryPercent: 100,
  balance: 4440,
  income: 0,
  isPremium: false,
  categoriesPhotoCounts: {
    naturePhotos: 0,
    architecturePhotos: 0,
    foodPhotos: 0,
    sportPhotos: 40,
    travelPhotos: 0,
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: profileState,
  reducers: {
    updateUserData: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    updateBalance: (state, action) => {
      state.balance = action.payload;
    },
    updatePercent: (state, action) => {
      state.memoryPercent = action.payload;
    },
    updateCategoriesPhotoCounts: (state, action) => {
      state.categoriesPhotoCounts = action.payload;
    }
  },
});

export const { updateBalance, updatePercent, updateUserData } = userSlice.actions;

export default userSlice.reducer;
