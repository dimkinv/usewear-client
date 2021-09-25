import { configureStore } from '@reduxjs/toolkit';
import { GroupData } from '../dynamic-forms/smart-form.model';
import { itemsReducer } from './items.slice';

export const store = configureStore({
    reducer: {
        items: itemsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
