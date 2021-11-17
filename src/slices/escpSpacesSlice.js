import { createSlice } from "@reduxjs/toolkit";
//===========================================================================================================
const initialState = {
  credentials: null,
  isSignedIn: false,
};
//===========================================================================================================
export const escpSpacesSlice = createSlice({
  name: "escpSpaces",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.credentials = action.payload;
    },

    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
});
//===========================================================================================================
export const { setCredentials, setIsSignedIn } = escpSpacesSlice.actions;
//===========================================================================================================
// Selector it will allow us to tae data back to redux layer
export const selectCredentials = (state) => state.escpSpaces.credentials;
export const selectIsSigned = (state) => state.escpSpaces.isSignedIn;
export default escpSpacesSlice.reducer;
