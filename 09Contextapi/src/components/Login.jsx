import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [username,setUsername]=useState('') 
  const [password,setPassword]=useState('') 
  const {setUser}=useContext(UserContext)

  const handleClick=()=>{
     setUser({username,password})
  }

  return (
    <div className='flex gap-3'>
      <input type="text" placeholder='enter your name' 
       value={username} 
       onChange={(e)=>setUsername(e.target.value)} 
       className='border'
      />
      <input type="text" placeholder='enter your password' 
       value={password} 
       onChange={(e)=>setPassword(e.target.value)} 
       className='border'
      />
      <button onClick={handleClick}
       className='bg-green-400 rounded-md py-1 px-2'>
        Click me
      </button>
    </div>
  )
}

export default Login
