import './App.css'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import { TodoProvider } from './context/TodoContext'
import { useEffect, useState } from 'react'

function App() {
  const [todo,setTodo]=useState([])
  const addTodo=(todo)=>{
      setTodo((prev)=>[...prev,{id:Date.now(),...todo}])
  }
 
  const deleteTodo=(id)=>{
    setTodo((prev)=>prev.filter(todo=>todo.id!==id))
  }
 
  const updateTodo=(id,todo)=>{
    setTodo((prev)=>prev.map(prevTodo=>prevTodo.id===id?todo:prevTodo))
  }
  
  const toggleTodo=(id)=>{
   setTodo((prev)=>prev.map(prevTodo=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

 useEffect(()=>{
  const todo=JSON.parse(localStorage.getItem('todo'))
  if(todo && todo.length>0){
     setTodo(todo)
  }
 },[])

 useEffect(()=>{
  localStorage.setItem('todo',JSON.stringify(todo))
 },[todo])


  return (
   <>
     <h1 className='text-4xl  bg-amber-400'>My name is Sohan Achhami</h1>
     <TodoProvider value={{todo,addTodo,deleteTodo,updateTodo, toggleTodo}}>
       <TodoForm/>
        <ul>
          {
            todo.map((todos)=>(
              <li key={todos.id}>
                 <Todo todo={todos} />
              </li>
            ))
          }
        </ul>
     </TodoProvider>
     
   </>
  
  )
}

export default App
