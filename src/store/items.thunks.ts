import { createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../models/item";
import { ItemType } from "../models/item-type";

export const fetchItemsByTypeThunk = createAsyncThunk('api/items', async (itemType: ItemType): Promise<Item[]> => {
    const response = await fetch(`http://localhost:4000/items?type=${itemType}`);
    return await response.json();
});