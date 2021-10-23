import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { itemsReducer } from './items/items.slice';
import { mainReducer } from './main/main.slice';

export const store = configureStore({
    reducer: {
        itemsStore: itemsReducer,
        mainStore: mainReducer
    },
    enhancers: [applyMiddleware(thunk)]
});

export type RootState = ReturnType<typeof store.getState>;
export const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;