import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../models/item";
import { fetchItemByIdThunk, fetchItemsByTypeThunk } from "./items.thunks";

interface ItemsState {
    items: Item[];
    selectedItem: Item | null;
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        selectedItem: null
    } as ItemsState,
    reducers: {
        setItems: (state, action: PayloadAction<Item[]>) => {
            state.items = action.payload;
        },
        setSelectedItem: (state, action: PayloadAction<Item>) => {
            state.selectedItem = action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(fetchItemsByTypeThunk.fulfilled, (state, action)=>{
            state.items = action.payload
        });

        builder.addCase(fetchItemByIdThunk.fulfilled, (state, item)=>{
            state.selectedItem = item;
        });
    }
});

export const { setItems, setSelectedItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;