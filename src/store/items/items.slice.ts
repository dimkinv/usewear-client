import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../models/item/item.model";
import { fetchItemByIdThunk, fetchItemsByTypeThunk, fetchListOptionsThunk } from "./items.thunks";

interface ItemsState {
    items: Item[];
    selectedItem: Item | null;
    listOptions: { [id: string]: string[] }
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        selectedItem: null,
        listOptions: {}
    } as ItemsState,
    reducers: {
        setItems: (state, action: PayloadAction<Item[]>) => {
            return {
                ...state,
                items: action.payload
            }
        },
        setSelectedItem: (state, action: PayloadAction<Item>) => {
            return {
                ...state,
                selectedItem: action.payload
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchItemsByTypeThunk.fulfilled, (state, action) => {
            return {
                ...state,
                items: action.payload
            }
        });

        builder.addCase(fetchItemByIdThunk.fulfilled, (state, action) => {
            return {
                ...state,
                selectedItem: action.payload
            }
        });

        builder.addCase(fetchListOptionsThunk.fulfilled, (state, action) => {
            let listOptions: { [id: string]: string[] } = {};
            for (const listOption of action.payload) {
                const options = listOptions[listOption.type] ?? [];
                options.push(listOption.value)
                listOptions = {
                    ...listOptions,
                    [listOption.type]: options
                }
            }

            return {
                ...state,
                listOptions
            }
        })
    }
});

export const { setItems, setSelectedItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;