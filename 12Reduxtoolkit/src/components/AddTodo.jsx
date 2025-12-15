    import React, { useState } from 'react'
    import { useDispatch } from 'react-redux'
    import { addTodo, updateTodo } from '../features/todo/todoSlice'

    const AddTodo = ({input,setInput,isEditable, setIsEditable,editId,setEditId}) => {
       
        const dispatch=useDispatch()
        
        const handleAdd =(e)=>{
        e.preventDefault()
 
        if(! input) return  
        if (isEditable){
          dispatch(updateTodo({id:editId,text:input}))
          setIsEditable(false)
          setEditId(null)
          setInput('')
        }else {
            dispatch(addTodo(input))
             setInput('')
        }
        }
    return (
        <div className='flex justify-center items-center gap-2 '>
        <input type="text"
        placeholder='Enter the todo'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        className='border w-30 sm:w-40 md:w-90'
        />
        <button onClick={handleAdd}
        className='bg-blue-600  px-2 rounded-md'
        >Add</button>
        </div>
    )
    }

    export default AddTodo
