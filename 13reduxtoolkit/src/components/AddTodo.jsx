import React from 'react'
import {useDispatch} from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

const AddTodo = ({data,setData,isEditable,setIsEditable , isId}) => {
  const dispatch=useDispatch()
  const handleAdd=(e)=>{
     e.preventDefault()
    if(!data) return null
    if(isEditable){
      dispatch(updateTodo({id:isId,text:data}))
      setIsEditable(prev=>!prev)
      setData('')
    }else{
      dispatch(addTodo(data))
      setData('')
    }
    
    
  }
  return (
   <>
   <div className='flex justify-center gap-4'>
     <input type="text"
      value={data}
      onChange={(e)=>setData(e.target.value)}
      className='border border-black rounded-md w-50 xl:w-90' />

      <button 
      onClick={handleAdd}
      
      className='text-white bg-green-600 px-3 rounded-md'>Add</button>
   </div>
      
   </>
  )
}

export default AddTodo
