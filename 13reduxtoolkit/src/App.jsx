
import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
const [data,setData]=useState('')
const [isEditable,setIsEditable]=useState(false)
const [isId,setIsId]=useState('')
    

  return (
    <>
    <div className='min-h-screen bg-neutral-400'>
       <h1 className='text-4xl bg-amber-400'>My name is sohan achhami.</h1>
       <AddTodo data={data} setData={setData} isEditable={isEditable} setIsEditable={setIsEditable} isId={isId}
       setIsId={setIsId} />
       <Todo data={data} setData={setData} isEditable={isEditable} setIsEditable={setIsEditable} sId={isId}
       setIsId={setIsId} />
    </div>
   
    </>
  )
}

export default App
