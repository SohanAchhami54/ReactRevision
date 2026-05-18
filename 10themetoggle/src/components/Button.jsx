import React from 'react'
import { useTheme } from '../context/theme'

const Button = () => {
  const {thememode,darkTheme,lightTheme}=useTheme()
  
  const onChangemode=(e)=>{
     const darkmode=e.currentTarget.checked
     if(darkmode){
      darkTheme()
     }else{
      lightTheme()
     }
  }
  return (
    <>
      <h1 className={thememode==='dark'?'text-white':'text-black'}>This is Button.</h1>
      <input type="checkbox" 
       checked={thememode==='dark'}
       onChange={onChangemode}
      />
    </>
  )
}

export default Button
