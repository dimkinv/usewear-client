import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { itemsReducer } from './items.slice';

export const store = configureStore({
    reducer: {
        itemsStore: itemsReducer
    },
    enhancers: [applyMiddleware(thunk)]
});

export type RootState = ReturnType<typeof store.getState>;
export const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;