import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "",
  text: "",
  buttonText: "",
  popupName: "",
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
    },
    setClosePopup: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setPopupData, setClosePopup } = popupsSlice.actions;

export default popupsSlice.reducer;
