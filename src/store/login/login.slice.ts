import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./login.thunk";

export interface LoginStore{
  accessToken?: string;
  firstName?: string;
  lastName?: string;
}

const initialState:LoginStore = {};

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) =>{
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      return {
        ...action.payload
      }
    });
  }
});


export const loginReducer = loginSlice.reducer;