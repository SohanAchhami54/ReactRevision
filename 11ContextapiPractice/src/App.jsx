import React, { use, useEffect } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import { useTodo } from './context/TodoContext'
import Thememode from './components/Thememode'

const App = () => {
  const { todos,thememode,setTodos} = useTodo()

  useEffect(()=>{
    const todosin=JSON.parse(localStorage.getItem('todos')) 
    if(todosin && todosin.length>0){
      setTodos(todosin)
    } 
  },[])
  
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify (todos))
  },[todos])
 
  return (
    <div className={`relative min-h-screen   flex items-center justify-center p-4 ${thememode==='dark'?'text-white bg-black':'text-black bg-white'}  `}>

      <div className="w-full max-w-xl bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-6">

        <h1 className="text-2xl font-bold text-center mb-6">
          📝 Basic Todo App
        </h1>

        <TodoForm />
        <ul className="mt-6 space-y-3">
          {todos?.map((todo) => (
            <li key={todo.id}>
              <Todo todo={todo} />
            </li>
          ))}
        </ul>

      </div>
     <Thememode/>
    </div>
    
  )
}

export default App