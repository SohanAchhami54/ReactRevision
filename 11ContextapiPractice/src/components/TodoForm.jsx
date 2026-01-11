import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

const TodoForm = () => {
  const [todo,setTodo]=useState('')
  const {addTodo}=useTodo()
  const handleAdd=(e)=>{
    if(!todo) return null
    e.preventDefault()
    addTodo({todo,completed:false})
    setTodo('')
  }
  return (
    <div className='flex justify-center items-center mt-5 gap-5'>
      <input type="text"
       value={todo}
       onChange={(e)=>setTodo(e.target.value)}
      className='border-1 rounded-md w-50 xl:w-90'
       />
      <button  onClick={handleAdd}
        className='bg-blue-600 px-3 rounded-md'>Add</button>
    </div>
  )
}

export default TodoForm
