import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

const AddTodo = ({data,setData,isEditable,setIsEditable,isId,setIsId}) => {
    const dispatch=useDispatch()
    
     const handleAdd=(e)=>{
      if(!data) return null
        e.preventDefault()
        if(isEditable){
          dispatch(updateTodo({id:isId,text:data}))
          setIsEditable(false)
          setData('')
        }else{
           dispatch(addTodo(data))
           setData('')
        }
      }
  return (
    <>
     <div className='flex justify-center items-center pt-10 gap-3'>
        <input type="text"
        value={data}
        onChange={(e)=>setData(e.target.value)}
        className='border rounded-md' />
        <button onClick={handleAdd}
         className='bg-blue-700 text-white px-2 rounded-2xl'>Add</button>
     </div>    
    </>
  )
}
export default  AddTodo
