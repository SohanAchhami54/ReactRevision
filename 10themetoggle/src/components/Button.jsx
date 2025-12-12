import React from 'react'
import { useTheme } from '../context/theme'

const Button = () => {
    const {thememode,lighttheme,darktheme}=useTheme()

    const themeChange=(e)=>{
        const darkmode=e.currentTarget.checked
        if(darkmode){
            darktheme()
        }else{
            lighttheme()
        }
    }
  return (
    <div>
      <h1>THis is button</h1>
      <input type="checkbox"
      value=''
      checked={thememode==='dark'}
      onChange={themeChange}
      />
    </div>
  )
}

export default Button
