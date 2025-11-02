import React from 'react'
import { useTheme } from '../context/theme'

const ThemeBtn = () => {
    const {themeMode,darkTheme,lightTheme}=useTheme();
  const handleTheme=(e)=>{
    const darkModeStatus=e.currentTarget.checked;
    if(darkModeStatus){
      darkTheme()
    }else{
      lightTheme()
    }
  }

  return (
    <div className='flex gap-2'>
      <input type="checkbox"
      value=''
      checked={themeMode==="dark"}
      onChange={handleTheme}
      />
      <h1>Toggle Theme</h1>
    </div>
  )
}

export default ThemeBtn
