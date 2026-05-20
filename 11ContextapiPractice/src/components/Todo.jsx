import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

const Todo = ({ todo }) => {
  const {thememode, updateTodo, toggleTodo, deleteTodo } = useTodo()

  const [isEditable, setIsEditable] = useState(false)
  const [newTodo, setNewTodo] = useState(todo.todo)

  return (
    <div className={`flex items-center justify-between  p-3 rounded-xl shadow-md ${thememode==='dark'?'text-white bg-black':'text-black bg-white'} `}>

      {/* LEFT SIDE */}
      <div className={`flex items-center gap-3 w-full  `}>

        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
          className="w-4 h-4"
        />

        <input
          type="text"
          value={newTodo}
          readOnly={!isEditable}
          onChange={(e) => setNewTodo(e.target.value)}
          className={`w-full bg-transparent outline-none px-2 py-1 rounded ${
            todo.isCompleted
              ? "line-through text-gray-400"
              : ""
          } ${
            isEditable ? "border border-gray-500 bg-gray-800 rounded-md" : ""
          }`}
        />
      </div>

      {/* BUTTONS */}
      <div className="flex gap-2 ml-2">

        <button
          onClick={() => {
            if (todo.isCompleted) return

            if (isEditable) {
              updateTodo(todo.id, newTodo)
            }

            setIsEditable((prev) => !prev)
          }}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${
            isEditable
              ? "bg-green-600 hover:bg-green-700"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          {isEditable ? "Save" : "Edit"}
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-3 py-1 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 transition"
        >
          Delete
        </button>

      </div>
    </div>
  )
}

export default Todo