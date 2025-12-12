import { useEffect, useState } from "react"
import { Button, Card } from "./components"
import { ThemeProvider } from "./context/theme"

function App() {
  const [thememode,setThemeMode]=useState('light')
  const lighttheme=()=>{
    setThemeMode('light')
  }
  const darktheme=()=>{
    setThemeMode('dark')
  }

useEffect(()=>{
  document.querySelector('html').classList.remove('light','dark')
  document.querySelector('html').classList.add(thememode)
},[thememode])

  return (
    <>
    <ThemeProvider value={{thememode,lighttheme,darktheme}}>
      <h1 className="text-3xl bg-amber-500">sohan</h1>
      <Button/>
      <Card/>
    </ThemeProvider>
      
    </>
  )
}

export default App
