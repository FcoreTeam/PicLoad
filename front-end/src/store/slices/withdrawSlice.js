import { createSlice } from "@reduxjs/toolkit";

export const withdrawState = {
  cardNumberText: "",
  cardNumber: "",
  moneyText: "",
  money: "",
};

const withdrawSlice = createSlice({
  name: "withdraw",
  initialState: withdrawState,
  reducers: {
    updateCardNumberText: (state, action) => {
      state.cardNumberText = action.payload;
    },
    updateCardNumber: (state) => {
      state.cardNumber = state.cardNumberText;
    },

    updateMoneyText: (state, action) => {
      state.moneyText = action.payload;
    },
    updateMoney: (state) => {
      state.money = state.moneyText;
    },
    withdraw: (state) => {
      const withdrawData = {
        cardNumber: state.cardNumber,
      };
      const existingData =
        JSON.parse(localStorage.getItem("withdrawals")) || [];
      existingData.push(withdrawData);
      localStorage.setItem("withdrawals", JSON.stringify(existingData));

      state.moneyText = ""
    },
  },
});

export const {
  updateCardNumberText,
  updateCardNumber,
  updateMoneyText,
  updateMoney,
  withdraw,
} = withdrawSlice.actions;
export default withdrawSlice.reducer;
