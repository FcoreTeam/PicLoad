import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   naturePhotos: 21,
   architecturePhotos: 134,
   foodPhotos: 150,
   sportPhotos: 2,
   travelPhotos: 17,
}

const photoSlice = createSlice({
    name: 'photos',
    initialState: initialState,
    reducers: {

    }
})
export default photoSlice.reducer;