import { configureStore } from '@reduxjs/toolkit'
import stateReducer from '../features/state/stateSlice'
export const store = configureStore({
    reducer: {
        state: stateReducer
    },
})