import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo } from '../features/todo/todoSlice'
const Todo = ({data,setData,isEditable,setIsEditable,setIsId}) => {
  const todos=useSelector(state=>state.todos)
  const dispatch =useDispatch()
  console.log('The value of todo are as follows:',todos)
  return (
    <>
    <div>
       <h1 className='text-center py-5'>This is the official Todo</h1>
      <ul className='flex flex-col justify-center items-center bg-red-400 container mx-auto'>
        {
           todos.map(todo=>(
            <li key={todo.id} className=''>
              <div className='flex flex-row gap-5 py-2 '>
                 <h1 className='w-50 xl:w-100'>{todo.text} </h1>
                 <div className='flex gap-2'>
                  <button 
                  onClick={()=>{
                    setData(todo.text)
                    setIsEditable(prev=>!prev)
                    setIsId(todo.id)
                  }}
                  className='bg-blue-700 rounded-md px-2'> Update </button>
                  <button
                  onClick={()=>dispatch(deleteTodo(todo.id))}
                  className='bg-red-700 rounded-md px-2'>Delete</button>
                 </div>
              
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
