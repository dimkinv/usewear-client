import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequest } from "../../models/login/login.request";
import { LoginResponse } from "../../models/login/login.response";

export const loginThunk = createAsyncThunk('api/login', async (loginRequest: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await fetch(`http://localhost:4000/login`, {
      method: 'POST',
      body: JSON.stringify(loginRequest),
      headers: {
        'content-type': 'application/json'
      }
    });

    return await response.json();
  } catch (error) {
    const e = error as Error;
    throw new Error(`Error logging in, ${e.message}`);
  }
})