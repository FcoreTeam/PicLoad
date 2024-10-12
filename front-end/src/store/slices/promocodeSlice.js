import { createSlice } from "@reduxjs/toolkit";

export const promocodeState = {
  promocodeText: "", // Вводимое, может меняться (!const)
  promocode: "", // Итоговое значение промокода (const)
};

const promocodeSlice = createSlice({
  name: "promocode",
  initialState: promocodeState,
  reducers: {
    updatePromocodeText: (state, action) => {
      state.promocodeText = action.payload;
    },
    updatePromocode: (state) => {
      state.promocode = state.promocodeText;
    },
  },
});

export const { updatePromocodeText, updatePromocode } = promocodeSlice.actions;

export default promocodeSlice.reducer;
