import React, { useContext } from 'react'
const TodoContext=React.createContext({
    todo:[
        {
            id:1,
            todo:'This is todo 1',
            completed:false

        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})

export const TodoProvider=TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}
