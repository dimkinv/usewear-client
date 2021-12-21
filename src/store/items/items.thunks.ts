import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemType } from "../../models/item-type";
import { Item } from "../../models/item/item.model";
import { ListOption } from "../../models/list-option";

export const fetchItemsByTypeThunk = createAsyncThunk('api/items', async (itemType: ItemType): Promise<Item[]> => {
    const response = await fetch(`http://localhost:4000/items?type=${itemType}`);
    return await response.json();
});

export const fetchItemByIdThunk = createAsyncThunk('api/itemById', async (id: string): Promise<Item> => {
    const response = await fetch(`http://localhost:4000/items/${id}`);
    return response.json();
});

export const fetchListOptionsThunk = createAsyncThunk('api/listOptions', async (): Promise<ListOption[]> => {
    const response = await fetch('http://localhost:4000/list-options');
    return await response.json();
})