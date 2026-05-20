import React, { useEffect, useState } from 'react'
import { useTodo } from '../context/TodoContext'

const TodoForm = () => {
  const { addTodo,thememode,setTodos } = useTodo()
  const [todo, setTodo] = useState('')
 
  const add = (e) => {
    e.preventDefault()
    if (!todo.trim()) return

    addTodo({ todo, isCompleted: false })
    setTodo('')
  }

// 

  return (
    <div >
       <form onSubmit={add} className={`flex gap-3 `}>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your todo..."
        className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium">
        Add
      </button>

    </form>
    </div>
   
  )
}

export default TodoForm