import {useContext,createContext} from "react";

 const TodoContext=createContext({
    todos:[{

        id:1,
        todo:"message 1",
        completed:false,
    }
    ],
    addTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
 });

 export const useTodo=()=>{
    return useContext(TodoContext);
 }
 export const TodoProvider=TodoContext.Provider
 