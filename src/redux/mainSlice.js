import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    increment: (state, payload) => {
      state.counterValue = state.counterValue + 1;
      return state;
    },
    decrement: (state, payload) => {
      state.counterValue = state.counterValue - 1;
      return state;
    },
  },
});

export const { increment, decrement } = mainSlice.actions;

export default mainSlice;
