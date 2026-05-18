import React, { useEffect, useState } from 'react'
import { ThemeContextProvider } from './context/theme'
import Button from './components/Button'
import Card from './components/Card'

const App = () => {
   
  const [thememode,setThememode]=useState('light') 
  const darkTheme=()=>{
    setThememode('dark')
  }
  const lightTheme=()=>{
    setThememode('light')
  }
 
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark') 
    document.querySelector('html').classList.add(thememode)
    },[thememode])

  return (
    <ThemeContextProvider value={{thememode,darkTheme,lightTheme}}>
      <div className={`${thememode==='dark'?'bg-black':'bg-white'} min-h-screen `}>
          <Button/>
         <Card/>   
      </div>
    </ThemeContextProvider>
  )
}

export default App
