import React from 'react'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
         <div className='flex flex-col justify-center items-center  mt-10'>
         <h1>This context api</h1>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  
  )
}

export default App
