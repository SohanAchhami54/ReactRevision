import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const navLinkClass=({isActive})=>{
        return isActive?"text-red-500":"text-black"
    }
  return (
    <>
      <div className='flex  flex-wrap justify-between   p-5 bg-gray-400  '>
       <p>{new Date().getFullYear()} | All Right Reserved </p>  
         <div className='flex gap-2'>
            <NavLink to='/'  className={navLinkClass}>Home</NavLink>
            <NavLink to='/about' className={navLinkClass}>About</NavLink>
            <NavLink to='/contact' className={navLinkClass}>Contact</NavLink>
         </div>

         <div>
            <p>Email:sohanachmm@gmail.com</p>
         </div>
     </div> 
    </>
  )
}

export default Footer
