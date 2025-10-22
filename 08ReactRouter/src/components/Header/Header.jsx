import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";  
const Header = () => {
    const [open,setOpen]=useState(false);
    const navLinkClass=({isActive})=>{
      return isActive?"text-red-600":"text-black"
    }
  return (
    <>
    <header>
      <div className='flex justify-around py-2 bg-gray-400'>
        <div className='text-xl'>
            Your Logo
        </div>

        
        <div className='flex gap-10 justify-center items-center' >
             <ul className='hidden md:flex gap-10'>
                <li className='flex gap-10'>
                  <NavLink  to="/" className={navLinkClass}>Home</NavLink>  
                </li>
                <li> 
                  <NavLink  to="/about" className={navLinkClass}>About</NavLink>
                </li>   
                <li>
                   <NavLink  to="/contact" className={navLinkClass}>Contact</NavLink>
                </li>
                <li> <NavLink to="/github" className={navLinkClass}>Github</NavLink> </li>
                <li><button className='   md:bg-blue-500   rounded '>Login</button></li>
                <li> <button className=' md:bg-blue-500  rounded '>SignUp</button></li>

                 
            </ul>
        </div>
         <button className='md:hidden' onClick={()=>setOpen((prev)=>!prev)}> <GiHamburgerMenu size={20} /></button>
           {open &&
            <div className="fixed top-0 right-0 w-[20%] h-[90vh] bg-gray-300 bg-opacity-90  px-2 py-5 md:hidden  rounded-lg break-all text-xs md:text-xl 
            
          ">
            <button onClick={()=>setOpen(false)}> <RxCross2  size={20} /> </button>
             <ul className=' md:hidden flex flex-col bg-amber-200 space-y-4'>
                <li><NavLink  to="/" className={navLinkClass}>Home</NavLink></li>
                <li><NavLink  to="/about" className={navLinkClass}>About</NavLink></li>
                <li><NavLink  to="/contact" className={navLinkClass}>Contact</NavLink></li>
                  <li><button className='   md:bg-blue-500 p-1 rounded '>Login</button></li>
                <li> <button className=' md:bg-blue-500 p-1 rounded '>SignUp</button></li>

             </ul>
             </div>
           }

     </div> 
     </header>
    </>
  )
}

export default Header
