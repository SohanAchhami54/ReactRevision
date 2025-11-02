import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import { Card, ThemeBtn } from './components'

function App() {
// const [themeMode,setThemeMode]=useState("light")
const [themeMode,setThemeMode]=useState('light')

const darkTheme=()=>{
  setThemeMode('dark')
}

const lightTheme=()=>{
  setThemeMode('light')
}

// const darkTheme=()=>{
//   setThemeMode("dark")
// }
// const lightTheme=()=>{
//   setThemeMode("light")
// }

useEffect(()=>{
 document.querySelector('html').classList.remove("light","dark")
 document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <h1 className='text-2xl bg-amber-200'>Hello my name is sohan achhami</h1>
         <ThemeBtn />
          <Card />
       
      </ThemeProvider>
    </>
  )
}

export default App
