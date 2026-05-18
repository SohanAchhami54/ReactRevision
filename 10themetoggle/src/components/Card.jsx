import React from 'react'
import { useTheme } from '../context/theme'

const Card = () => {
    const {thememode}=useTheme()
  return (
    <div className={`${thememode==='dark'?'text-white bg-black':'text-black bg-white'}`}>
      <h1>This is Card</h1>
      <section>
        <p >hello my name is sohan achhami.</p>        
      </section>
    </div>
  )
}

export default Card
