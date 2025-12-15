import React, { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
const App = () => {
   const [input,setInput]=useState('')
   const [isEditable,setIsEditable]=useState(false)
   const [editId,setEditId]=useState(null)
  return (
    <div className='min-h-screen bg-neutral-400'>
       <h1 className='text-3xl text-blue-700 '>My name is sohan achhami</h1>
       <AddTodo input={input} setInput={setInput} isEditable={isEditable} setIsEditable={setIsEditable}
       editId={editId} setEditId={setEditId}
       />
       <Todo setInput={setInput} isEditable={isEditable} setIsEditable={setIsEditable}
       editId={editId} setEditId={setEditId} />
    </div>
  )
}

export default App
