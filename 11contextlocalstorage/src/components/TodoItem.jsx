import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({todo}){
    // {

    //     id:1,
    //     todo:"message 1",
    //     completed:false,
   const [isEditable,setIsEditable]=useState(false)
   const [todoMsg,setTodoMsg]=useState(todo.todo)
   const {updateTodo,deleteTodo,toggleTodo}=useTodo()
   const toggleChange=()=>{
        toggleTodo(todo.id)
   }
   const edit=()=>{
     updateTodo(todo.id,{...todo,todo:todoMsg})
     setIsEditable(false)
   }
   return (
    <div className="flex">
    <input type="checkbox"
     checked={todo.completed}
     onChange={toggleChange}
    />

    <input type="text" className={`w-full  ${todo.completed?"line-through":""} 
     ${isEditable?"border-2 rounded-lg":"border-transparent"}
     `}
     value={todoMsg}
     onChange={(e)=>setTodoMsg(e.target.value)}
     readOnly={!isEditable}
    />
    <div className="flex gap-2">
    <button onClick={()=>{
        if(todo.completed) return
        if(isEditable){
            edit()
        }else{
            setIsEditable((prev)=>!prev)
        }
    }}
    
    >
        {isEditable?"Update":"Edit"}
    </button>
    <button onClick={()=>{
        deleteTodo(todo.id)
    }} >
        Delete
    </button>
    </div>
    </div>
   )
}
export default TodoItem;