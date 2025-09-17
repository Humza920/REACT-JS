import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[],
    addTodo:(todo)=>{},
    updateTodo:(todo , id)=>{},
    deleteTodo:(id)=>{},
    isdoneTodo:(id , bolean)=>{}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}

