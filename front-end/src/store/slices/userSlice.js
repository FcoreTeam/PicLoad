import { createSlice } from "@reduxjs/toolkit";

export const profileState = {
  avatar: null,
  name: "Testing Name",
  username: "@user",
  memoryUse: 0.58,
  memoryAll: 1,
  memoryPercent: 100,
  balance: 2314.11,
  income: 234.45,
};

const userSlice = createSlice({
  name: "user",
  initialState: profileState,
  reducers: {
    updateBalance: (state, action) => {
      state.balance = action.payload;
    },
    updatePercent: (state, action) => {
      state.memoryPercent = action.payload;
    },
  },
});

export const { updateBalance, updatePercent } = userSlice.actions;

export default userSlice.reducer;
