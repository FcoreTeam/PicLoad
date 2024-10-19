import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "",
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
      state.buttonText = action.payload.buttonText;
      state.popupName = action.payload.popupName;
      state.popupEmoji = action.payload.popupEmoji;
      state.emojiBackground = action.payload.emojiBackground;
    },
    setClosePopup: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setPopupData, setClosePopup } = popupsSlice.actions;

export default popupsSlice.reducer;
