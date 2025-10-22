import React, { useState } from 'react'
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {setUser}=useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <input type="text"
      placeholder='enter name'
      className='border' 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      />

      <input type="password"
      placeholder='enter password'
      className='border ml-2'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
       />
       <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Profile
