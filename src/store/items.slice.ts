import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemsState {
    items: unknown[];
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: []
    } as ItemsState,
    reducers: {
        setItems: (state, action: PayloadAction<unknown[]>) => {
            state.items = action.payload;
        }
    }
});

export const { setItems } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;