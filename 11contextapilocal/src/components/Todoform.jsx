import React, { useState } from 'react'
import { useTodo } from '../context/Todocontext'

const Todoform = ({todos}) => {
    const [todo,setTodo]=useState('')
    const {addTodo} =useTodo()
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo({todo,completed:false})
        setTodo('')
    }
  return (
    <div className='flex justify-center items-center bg-amber-500 container mx-auto p-10 mb-10'>
      <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder='Enter your Todo'
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      className='border border-2 px-10 mr-4'
      />
      <button className='bg-green-500 p-1 rounded-2xl'>Add Todo</button>
      </form>
    </div>
  )
}

export default Todoform
