import React, { useEffect } from 'react'
import { useTodo } from '../context/TodoContext'

const Thememode = () => {
    const {darktheme,lighttheme,thememode,setThememode} = useTodo()
    const changeThememode=(e)=>{
      const darkmode=e.currentTarget.checked  
      if(darkmode){
        darktheme()
      } else{
        lighttheme()
      }
    }
  return (
    <div>
       <label htmlFor="thememode"></label>
      <input type="checkbox" id='themeMode' 
      checked={thememode==='dark'}
      onChange={changeThememode}
      className='absolute top-10 right-10' />
    </div>
  )
}

export default Thememode
