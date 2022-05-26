import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getJwtToken } from "../../utils/localstorage.service";
import { loginThunk } from "./login.thunk";

export interface LoginStore {
  accessToken: string | null;
  firstName?: string;
  lastName?: string;
  from: string;
}

const initialState: LoginStore = {
  accessToken: getJwtToken(),
  from: '/'
};

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    setFromRoute: (state, payload: PayloadAction<string>) => {
      return {
        ...state,
        from: payload.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    });
  }
});


export const loginReducer = loginSlice.reducer;
export const { setFromRoute } = loginSlice.actions