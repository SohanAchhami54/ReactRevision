import { useState } from 'react'
import {NavLink} from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
    const isNavActive=({isActive})=>{
       return isActive?"text-red-600":"text-white";
    }
    const [open,setOpen]=useState(false)
  return (
    <>
      <header>
        <nav className='flex  p-4 sm:p-6 justify-between bg-gray-700 text-white font-semibold text-lg md:text-xl'>
             <span>
                <NavLink to='/' className='text-xs md:text-lg lg:text-xl'>Sohan Achhami</NavLink>
             </span>

             {/* for larger screen  */}
             <div className='hidden lg:flex gap-3 sm:gap-4'>
                 <NavLink to='/' className={isNavActive} >Home</NavLink>
                 <NavLink to='/about' className={isNavActive} >About</NavLink>
                 <NavLink to='/github' className={isNavActive}> Github </NavLink>
                 <NavLink to='/contact' className={isNavActive} >Contact</NavLink>
             </div>
             {/* for mobile phones  */}
             {!open && (
                 <div className='lg:hidden flex'>
                <GiHamburgerMenu onClick={()=>setOpen(prev=>!prev)}/>
              </div>
             )}
             
              {open && (
                <div className='relative'>
                <div className='absolute flex flex-col top-0 right-0 bg-neutral-400 '>
                     <RxCross2 onClick={()=>setOpen(prev=>!prev)} />
                  <NavLink to='/' className={isNavActive} onClick={()=>setOpen(prev=>!prev)} >Home</NavLink>
                 <NavLink to='/about' className={isNavActive} onClick={()=>setOpen(prev=>!prev)}>About</NavLink>
                 <NavLink to='/contact' className={isNavActive} onClick={()=>setOpen(prev=>!prev)}>Contact</NavLink>
                 <NavLink to='/github' className={isNavActive} onClick={()=>setOpen(prev=>!prev)} >Github</NavLink>
                </div>
                </div>
              )}

              

        </nav>
      </header>
    </>
  )
}

export default Header
