import todoReducer from '../features/todo/todoSlice';

import { combineReducers, configureStore } from '@reduxjs/toolkit'

export const Stored = configureStore({
        reducer: todoReducer
    })

// const rootReducer = combineReducers({
//     // Add other reducers here if you have more slices
//     todos: todoReducer,
// });

// export type RootState = ReturnType<typeof rootReducer>

// export type RootState = ReturnType<typeof Stored>;