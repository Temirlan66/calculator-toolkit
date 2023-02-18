import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  result: 0,
};

export const calculatorSlice = createSlice({
  name: "caculator",
  initialState,
  reducers: {
    add(state, action) {
      state.result = state.result + action.payload;
    },
    subtract(state, action) {
      state.result = state.result - action.payload;
    },
    dividi(state, action) {
      state.result = state.result / action.payload;
    },

    multiply(state, action) {
      state.result = state.result * action.payload;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;

