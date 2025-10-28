import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addtodo: (state, action) => { state.todos.push(action.payload) },
        removetodo: (state, action) => {
            state.todos = state.todos.filter((x) => {
                console.log(x.id !== action.payload);
                x.id !== action.payload
            })
        },
        markasdone: (state, action) => {
            const todo = state.todos.find((x) => x.id === action.payload);
            if (todo) {
                if (todo.isCompleted === false) {
                    todo.isCompleted = true
                    console.log(todo);
                } else {
                    todo.isCompleted = false
                    console.log(todo);
                }
            }
        }

    }
})

export const { removetodo, addtodo, markasdone } = todoSlice.actions
export default todoSlice.reducer