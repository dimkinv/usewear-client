import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../models/item";
import { fetchItemsByTypeThunk } from "./items.thunks";

interface ItemsState {
    items: Item[];
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: []
    } as ItemsState,
    reducers: {
        setItems: (state, action: PayloadAction<Item[]>) => {
            state.items = action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(fetchItemsByTypeThunk.fulfilled, (state, action)=>{
            state.items = action.payload
        });
    }
});

export const { setItems } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;