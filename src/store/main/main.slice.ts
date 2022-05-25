import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MainStore {
    pageTitle: string;
}

const initialState: MainStore = {
    pageTitle: 'Usewear'
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setPageTitle: (state, action: PayloadAction<string>) => { state.pageTitle = action.payload }
    },
});

export const { setPageTitle } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;