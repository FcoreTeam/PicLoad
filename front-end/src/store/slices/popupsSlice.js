import { createSlice } from "@reduxjs/toolkit";
import Layout from "../../components/pages/Layout";

const initialState = {
    isOpen: false,
    title: "",
    text: "",
    popupName: ""
}

const popupsSlice = createSlice({
    name: 'popups',
    initialState: initialState,
    reducers: {
        setPopupData: (state, action) => {
            state.isOpen = action.payload.isOpen
            state.title = action.payload.title
            state.text = action.payload.text
            state.popupName = action.payload.popupName
        },
        setClosePopup: (state) => {
            state.isOpen = false
        }
    }
})

export const { setPopupData, setClosePopup } = popupsSlice.actions;

export default popupsSlice.reducer;