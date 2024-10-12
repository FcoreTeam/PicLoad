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
};

const userSlice = createSlice({
  name: "user",
  initialState: profileState,
  reducers: {
    updateBalance: (state, action) => {
      state.balance = action.balance;
    },
    upadtePercent: (state, action) => {
      state.memoryPercent = action.memoryPercent;
    },
  },
});

export const { updateBalance } = userSlice.actions;
export const { upadtePercent } = userSlice.actions;

export default userSlice.reducer;
