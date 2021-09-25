import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { itemsReducer } from './items.slice';

export const store = configureStore({
    reducer: {
        items: itemsReducer
    },
    enhancers: [applyMiddleware(thunk)]
});

export type RootState = ReturnType<typeof store.getState>;
