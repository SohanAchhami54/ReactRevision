import React, { useContext } from "react";
const Todocontext=React.createContext({
    todos:[
        {
            id:1,
            todo:'This is todo',
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})

export const TodoProvider=Todocontext.Provider

export const useTodo=()=>{
    return useContext(Todocontext)
}