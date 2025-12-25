import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo } from '../features/todo/todoSlice'

const Todo = ({data,setData,isId,setIsId,isEditable,setIsEditable,}) => {
    const todos=useSelector((state)=>state.todos)
    const dispatch=useDispatch()
  return (
    <div className='flex flex-col justify-center items-center  mt-5'>
       <h1>Hello this is Todo</h1>
       <ul className='flex flex-col gap-3'>
        {
            todos.map((todo)=>(
                <li key={todo.id} className='flex gap-3'>
                    <h1 className='w-50 md:w-80  bg-gray-700 text-white rounded-md'>{todo.text} </h1>
                    <button onClick={()=>dispatch(deleteTodo(todo.id))}
                     className='bg-red-600 text-white px-2 rounded-md'>Delete</button>
                     <button onClick={()=>{
                        setIsEditable((prev)=>!prev)
                        setIsId(todo.id)
                        setData(todo.text)
                     }} 
                      className='bg-green-600 text-white px-2 rounded-md'>Update</button>
                </li>
            ))
        }
       </ul>
    </div>
  )
}

export default Todo
