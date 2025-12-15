import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo } from '../features/todo/todoSlice'

const Todo = ({setInput,setIsEditable, setEditId}) => {
   const todos=useSelector(state=>state.todos)
   const dispatch=useDispatch()
  
  return (
    <>
    <h1 className='text-center my-3'>Edit and Delete Functionality</h1>
    <div className='flex justify-center items-center pt-4 bg-amber-400 container mx-auto py-2 '>
      {/* <h1 className='mb-2'>Edit and Delete Todo</h1> */}
      <ul className='flex flex-col gap-3'>
      {
        todos.map((todo)=>(
            <li key={todo.id} className='flex gap-10'>
               <h1 className='w-100'>{todo.text} </h1>
               <div className='flex gap-2'>
                  <button className='bg-blue-500 px-1 rounded-md' onClick={()=> 
                     {
                       setIsEditable((prev)=>!prev)
                       setEditId(todo.id)
                       setInput(todo.text)
                     }}
                     >
                Edit
               </button>
               <button className='bg-red-500 px-1 rounded-md' onClick={()=>dispatch(deleteTodo(todo.id))} >
                Delete
               </button>
               </div>
            </li>
        ))
      }
      </ul>
      

    </div>
        </>
  )
}

export default Todo
