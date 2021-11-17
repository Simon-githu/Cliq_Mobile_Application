import {configureStore} from "@reduxjs/toolkit";
import escpSpacesReducer from "./slices/escpSpacesSlice";

export const store = configureStore({
    reducer:{
       escpSpaces:escpSpacesReducer,
    }
})