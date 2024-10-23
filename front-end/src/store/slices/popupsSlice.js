import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isNext: false,
  title: "",
  subtext: "",
  text: "",
  rejectText: "",
  buttonText: "",
  buttonTextDark: false,
  linkText: "",
  popupName: "",
  popupEmoji: "",
  emojiBackground: "",
  productPrice: "",
};

const popupsSlice = createSlice({
  name: "popups",
  initialState: initialState,
  reducers: {
    setPopupData: (state, action) => ({
      ...initialState,
      ...action.payload
    }),
    setClosePopup: (state) => {
      if (state.isNext == true) {
        state.isNext = false;
      }
      state.isOpen = false;
    },
    setNextPopup: (state) => {
      state.isNext = true;
    },
  },
});

export const { setPopupData, setClosePopup, setNextPopup } =
  popupsSlice.actions;

export default popupsSlice.reducer;
