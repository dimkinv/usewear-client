import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generalDialButtons } from "../../shared/general-dial-buttons";
import { IconName } from "./icon-name";

export interface MainStore {
  pageTitle: string;
  speedDialActions: DialAction[] | null
}

export interface DialAction {
  iconName: IconName;
  color?: 'primary' | 'error',
  tooltip: string;
  action: () => void;
}

const initialState: MainStore = {
  pageTitle: 'Usewear',
  speedDialActions: generalDialButtons
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<string>) => state = { ...state, pageTitle: action.payload },
    setSpeedDialButtons: (state, action: PayloadAction<DialAction[] | null>) => state = { ...state, speedDialActions: action.payload ? action.payload : generalDialButtons }
  },
});

export const { setPageTitle, setSpeedDialButtons } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;