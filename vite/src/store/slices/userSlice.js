import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  avatar: null,
  name: "Testing Name",
  username: "@user",
  memoryLeft: 0,
  memoryAll: 1,
  balance: 0,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateBalance: (state, action) => {
      state.balance = action.balance
    },
  },
});

export const { updateBalance } = userSlice.actions;

export default userSlice.reducer;