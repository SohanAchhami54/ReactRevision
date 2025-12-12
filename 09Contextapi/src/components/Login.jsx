import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
     e.preventDefault()
     setUser({name,password})
    }
  return (
  <>
  <form onSubmit={handleSubmit}>
    <input type="text"
    placeholder='enter your name'
    value={name}
    onChange={(e)=>setName(e.target.value)}
     />
     <input type="text"
     placeholder='enter your password'
     value={password}
     onChange={(e)=>setPassword(e.target.value)} />
    <button  type='submit'>Submit</button>
    </form>
  </>
  )
}

export default Login
