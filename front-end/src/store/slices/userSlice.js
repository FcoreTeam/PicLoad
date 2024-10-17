import { createSlice } from "@reduxjs/toolkit";

export const profileState = {
  avatar: null,
  name: "Testing Name",
  username: "@user",
  memoryUse: 0,
  memoryAll: 1,
  memoryPercent: 100,
  balance: 0,
  income: 0,
  isPremium: false,
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
  },
});

export const { updateBalance, updatePercent, updateUserData } = userSlice.actions;

export default userSlice.reducer;
