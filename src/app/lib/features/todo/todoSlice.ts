"use client"
import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { 
            id:nanoid(),
            text:'Learn Redux-Toolkit',
            completed:false
        }
],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = 
                {
                    id: nanoid(), 
                    text: action.payload,
                    completed:false,
                }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo:any) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo,} = todoSlice.actions

export default todoSlice.reducer