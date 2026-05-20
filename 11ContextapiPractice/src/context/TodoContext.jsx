import { createContext, useContext, useState } from "react" 
const TodoContext=createContext({
    todos:[
        {
           id:1,
           todo:'todomsg', 
           isCompleted:false
        }
    ], 
     addTodo:(todo)=>{}, 
     updateTodo:(id,newTodo)=>{}, 
     deleteTodo:(id)=>{}, 
     toggleTodo:(id)=>{},
     themeMode:'light',
     darktheme:()=>{}, 
     lighttheme:()=>{}
})

export const TodoProvider=({children})=>{
    const [todos,setTodos]=useState([])
    const [thememode,setThememode]=useState('light')
    
    const addTodo=(todo)=>{
        setTodos((prev)=>[...prev,{id:Date.now(),...todo}]) 
    }
    const updateTodo=(id,newTodo)=>{
        setTodos((prev)=>prev.map(data=>data.id===id?{...data,todo:newTodo}:data))
    }
    const deleteTodo=(id)=>{
        setTodos((prev)=>prev.filter(data=>data.id!==id)) 
    }
    const toggleTodo=(id)=>{
       setTodos((prev)=>prev.map(data=>data.id===id?{...data,isCompleted:!data.isCompleted}:data))
    }
    const darktheme=()=>{
        setThememode('dark')
    }
    const lighttheme=()=>{
        setThememode('light')
    }

    const value={thememode,setThememode,todos,setTodos,addTodo,updateTodo,deleteTodo,toggleTodo,darktheme,lighttheme}

    return (
    <TodoContext.Provider value={value}>
          {children}
    </TodoContext.Provider>
)
}

export const useTodo=()=>{
    return useContext(TodoContext)
}