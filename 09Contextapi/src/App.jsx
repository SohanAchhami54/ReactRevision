import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


const App = () => {
  return (
    <div>
      <UserContextProvider>
          <h1 className='text-3xl'>My name is sohan achhami.</h1>
          <Login/>
          <Profile/>
      </UserContextProvider>
    </div>
  )
}

export default App
