import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isNext: false,
  title: "",
  subtext: "",
  text: "",
  buttonText: "",
  popupName: "",
  popupEmoji: "",
  emojiBackground: "",
};

const popupsSlice = createSlice({
  name: "popups",
  initialState: initialState,
  reducers: {
    setPopupData: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.title = action.payload.title;
      state.text = action.payload.text;
      state.subtext = action.payload.subtext;
      state.buttonText = action.payload.buttonText;
      state.popupName = action.payload.popupName;
      state.popupEmoji = action.payload.popupEmoji;
      state.emojiBackground = action.payload.emojiBackground;
    },
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
