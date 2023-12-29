import todoReducer from '../features/todo/todoSlice';

import { configureStore } from '@reduxjs/toolkit'

export const Stored = configureStore({
        reducer: todoReducer
    })
