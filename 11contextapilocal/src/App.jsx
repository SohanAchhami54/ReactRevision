import { useEffect, useState } from 'react'
import './App.css'
 import { Themeprovider } from './context/theme'
import Button from './components/Button'
import { TodoProvider } from './context/Todocontext'
import Todoform from './components/Todoform'
import Todoitem from './components/Todoitem'

function App() {
  const [thememode,setThemeMode]=useState('light')
  const [todos,setTodos]=useState([])
   
  //this is for themetoggle
  const lighttheme=()=>{
    setThemeMode('light')
  }

  const darktheme=()=>{
    setThemeMode('dark')
  }

  //this is for the todos
  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
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
   document.querySelector('html').classList.remove('dark','light')
   document.querySelector('html').classList.add(thememode)
  },[thememode])


useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem('todos'))
  if(todos && todos.length>0){
     setTodos(todos)
  }
},[])

 useEffect(()=>{
   localStorage.setItem('todos',JSON.stringify(todos))
 },[todos])


  return (
    <Themeprovider value={{thememode,lighttheme,darktheme}}>
      <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
    <div className={`${thememode==='dark'?'bg-black text-white':'bg-white text-black'} min-h-screen`}>

       <h1 className='text-xl '>My name is sohan achhami. </h1>
       <Button/>
       <Todoform />  
       {todos.map((indivitodo)=>(
         <div key={indivitodo.id}>
               <Todoitem todo={indivitodo} />
         </div>
       ))}
      
    </div>
     </TodoProvider>
     </Themeprovider>
  )
}

export default App
    