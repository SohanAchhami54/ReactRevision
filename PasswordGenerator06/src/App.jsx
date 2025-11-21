import React, { useCallback, useEffect, useState } from 'react'

const App = () => {
  const [count,setCount]=useState(8);
  const [isNumber,setIsNumber]=useState(false)
  const [isCharacter,setIsCharacter]=useState(false)
  const [password,setPassword]=useState('');

  const passwordGenerator=useCallback(()=>{
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passgenerated=''
    if (isNumber) str+='0123456789'
     if (isCharacter) str+='!@#$%^&*()+{}[],.||<>'

    for(let i=0;i<count;i++){
        let index=Math.floor(Math.random()*str.length);
        passgenerated+=str[index];
    }
     setPassword(passgenerated)
  },[count,isNumber,isCharacter]) 
   
   useEffect(()=>{
    passwordGenerator();
   },[count,isNumber,isCharacter]);


  return (
    <>
    <div className='bg-amber-600 min-h-screen flex flex-col justify-center items-center'>
         <h1>My name is sohan achhami.</h1>
         <div className='bg-blue-400/20 px-4 py-4 flex  justify-center items-center gap-4 mb-6 md:mb-10'>
          <input type="text" value={password}
          className='border border-white rounded-xl px-10 py-2' />
          <button>
            copy
          </button>
         </div>
         <div className='flex gap-4'>
          <div className='flex gap-2'>
               <h2>length:{count} </h2>
            <input type="range" min={8} max={15} value={count}
             onChange={(e)=>setCount(e.target.value)}
            />
          </div>
          <div className='flex gap-3'>
            <label htmlFor="number">Number</label>
           <input type="checkbox" id='number' onClick={()=>setIsNumber((prev)=>!prev)} />

            <label htmlFor="string">String</label>
           <input type="checkbox" id='string'  onClick={()=>setIsCharacter((prev)=>!prev)}  />
          </div>
             
         </div>
    </div>
    </>
  )
}

export default App
