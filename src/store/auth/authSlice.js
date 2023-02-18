
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isAuthrized: false,
};

 export const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    LogIn(state,action){
      state.email= action.payload;
      state.isAuthrized=true;
    },

    LogOut(state){
      return initialState
    }
  }
})

export const authActions = authSlice.actions

