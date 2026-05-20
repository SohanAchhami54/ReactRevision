import React from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import { useTodo } from './context/TodoContext'

const App = () => {
  const { todos } = useTodo()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-4">

      <div className="w-full max-w-xl bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-6">

        <h1 className="text-2xl font-bold text-center mb-6">
          📝 Basic Todo App
        </h1>

        <TodoForm />

        <ul className="mt-6 space-y-3">
          {todos.map((todo) => (
            <li key={todo.id}>
              <Todo todo={todo} />
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default App