import React from 'react'
import { useTheme } from '../context/theme'

const Button = () => {
    const {thememode,lighttheme,darktheme} =useTheme()
   
    const handleChange=(e)=>{
        const darkMode=e.currentTarget.checked
        if(darkMode){
            darktheme()
        }else{
            lighttheme()
        }
    }
  return (
    <div  className='flex right-0'>
        <input type="checkbox"
        value='' 
        checked={thememode==='dark'}
        onChange={handleChange}
       
        />
    </div>
  )
}

export default Button
