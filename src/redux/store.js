import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";

const store = configureStore({ reducer: mainSlice.reducer });

export default store;
