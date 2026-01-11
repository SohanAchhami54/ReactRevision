import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

const Todo = ({todo}) => {
  const {deleteTodo,updateTodo,toggleTodo}=useTodo()
  const [isEditable,setIsEditable]=useState(false)
  const [todoMsg,setTodoMsg]=useState(todo.todo)
 
   
  return (
    <div>
      <div className='flex justify-center items-center gap-1 py-2'>
        <input type="checkbox"
        value={todo.completed} 
        checked={todo.completed}
        onChange={()=>toggleTodo(todo.id)}
       />
        <input type="text" value={todoMsg} 
        onChange={(e)=>setTodoMsg(e.target.value)}
        readOnly={!isEditable}
        className={` ${todo.completed?`line-through bg-neutral-500`:''} border rounded-md w-50 xl:w-90` } />
        <div className='flex gap-3'>
          <button
          onClick={()=>{
             if(todo.iscompleted) return null 
             if (isEditable){
                updateTodo(todo.id,{...todo,todo:todoMsg})
                setIsEditable(prev=>!prev)
             }
             setIsEditable(prev=>!prev)
          }}
          className='bg-green-500 text-white px-2 rounded-md'>Update</button>
          <button 
           onClick={()=>deleteTodo(todo.id)}
          className='bg-red-500 text-white px-2 rounded-md'>Delete</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Todo
