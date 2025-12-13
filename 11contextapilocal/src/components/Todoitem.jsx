import { useState } from 'react'
import { useTodo } from '../context/Todocontext'

const Todoitem = ({todo}) => {
    const [isEditable,setIsEditable]=useState(false)
    const [todomsg,setTodoMsg]=useState(todo.todo)
    const {toggleTodo,updateTodo}=useTodo()


    const handleChange=()=>{
        toggleTodo(todo.id)
    }

  
  return (
    <div className='flex justify-center items-center gap-10 bg-blue-400 container mx-auto p-2'>
   
        <input type="checkbox"
         checked={todo.completed}
         onChange={handleChange}
        />
        <input type="text"
        value={todomsg}
        onChange={(e)=>setTodoMsg(e.target.value)}
        className={`${todo.completed?'bg-amber-400 line-through p-1':'bg-gray-500 p-1'} 
         ${isEditable? 'border-2 rounded-lg':'  border-transparent' }  rounded-2xl w-2xl
        `}
        readOnly={!isEditable}
        />
        <button onClick={()=>{
            if(todo.completed) return 

            if(isEditable){
                updateTodo(todo.id,{...todo,todo:todomsg})
                setIsEditable(false)
            }else{
               setIsEditable((prev)=>!prev) 
            }
        }}
        className={`${isEditable?'bg-green-600 p-1':'bg-red-600 p-1'}`}
        >
            {isEditable?'Add':'Edit'}
        </button>

    </div>
  )
}

export default Todoitem
