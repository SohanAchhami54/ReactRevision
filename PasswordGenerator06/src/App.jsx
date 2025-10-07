import { useCallback, useEffect, useRef, useState } from "react";
const App = () => {
  const [count,setCount]=useState(8);
  const [password,setPassword]=useState("");
  const [isNumber,setIsNumber]=useState(false);
  const [isCharacter,setIsCharacter]=useState(false);
 
  //useRef
  const passwordRef=useRef(null);

 const passwordGenerator=useCallback(()=>{
   let result="";
   let string="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   if(isNumber) string+="0123456789";
   if(isCharacter) string+="@#$%^&*(){}[]|";
   
   for(let i=0;i<count;i++){
    let randomLength=Math.floor(Math.random()*string.length);
    result+=string[randomLength];
   }
   setPassword(result);

 },[count,isCharacter,isNumber]);

 useEffect(()=>{
  passwordGenerator();
 },[count,isNumber,isCharacter])


 const copyToClipBoard=()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
 }

  return (
    <>
      <div className='text-2xl flex flex-col justify-center items-center min-h-screen bg-gray-800'>
       
        <div className="bg-gray-600 p-10 rounded">
        <h1>Password Generator</h1>
      <div className='flex gap-2 mt-4'>
        <input type="text" className='border rounded-lg w-100' value={password} ref={passwordRef} />
        <button onClick={copyToClipBoard}>Copy</button>
      </div>
      <div className="flex gap-2 justify-center items-center">
        length:{count}
        <input type="range" min={8} max={16} value={count}
        onChange={(e)=>setCount(e.target.value)}
        />

        <label htmlFor="number">Number</label>
        <input type="checkbox" id="number" onClick={()=>setIsNumber((prev)=>!prev)} />


        <label htmlFor="character">Character</label>
        <input type="checkbox" id="character" onClick={()=>setIsCharacter((prev)=>!prev)} />
      </div>


      </div>
      </div>
    </>
  )
}

export default App
