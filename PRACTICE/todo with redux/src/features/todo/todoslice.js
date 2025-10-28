import { createSlice, nanoid } from "@reduxjs/toolkit";

const initState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todos",
    initState,
    reducers: {
        addtodo: (state, action) => { state.todos.push(action.payload) },
        removetodo: (state, action) => {
            state.todos.filter((x) => {
            return x.id !== action.payload
            })
        },
        markasdone: (state, action) => {
            const todo = state.todos.find((x) => x.id === action.payload.id);
            if (todo) {
                todo.isCompleted = action.payload.toggle;
            }
        }

    }
})

export const { removetodo, addtodo, markasdone } = todoSlice.actions
export default todoSlice.reducer