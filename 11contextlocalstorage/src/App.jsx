import { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {

  const [todos,setTodos]=useState([])
  
  const addTodo=(todo)=>{
    setTodos((prev)=>([...prev,{id:Date.now(),...todo}]))
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
  }

  const toggleTodo=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
 
  
  useEffect(()=>{
   const todos=JSON.parse(localStorage.getItem("todos"))
   if(todos && todos.length>0){
    setTodos(todos)
   }
  },[])

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleTodo}}>
       <div className="flex  justify-center  items-center flex-col">
      <TodoForm/>
       <ul>
        {
          todos.map((todo)=>
          <li key={todo.id}>
             <TodoItem todo={todo}/>
          </li>
          )
        }
       </ul>
       </div>
     
    </TodoProvider>
  )
}

export default App
