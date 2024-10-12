import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   naturePhotos: 0,
   architecturePhotos: 0,
   foodPhotos: 0,
   sportPhotos: 0,
   travelPhotos: 0,
}

const photoSlice = createSlice({
    name: 'photos',
    initialState: initialState,
    reducers: {

    }
})
export default photoSlice.reducer;