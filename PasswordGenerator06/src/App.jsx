import { useCallback, useEffect, useState,useRef} from 'react'

function App() {
  const [count, setCount] = useState(8)
  const [password,setPassword]=useState("");
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [characters,setCharacters]=useState("");
  
  //using the useRef hook
  const passwordRef=useRef(null);

const passwordGenerator=useCallback(()=>{
    let result="";
    let str="ABCDEFGHIKLMNOPQRSTWVXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(characters) str+="{}!@#$%&*()";


    for(let i=0;i<count;i++){
      const index=Math.floor(Math.random()*str.length);
      result+=str[index];
    }
    setPassword(result);
},[count, numberAllowed,characters,setPassword]);



//useRef hook
const copyToClipBoard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,15);
  window.navigator.clipboard.writeText(password);
},[password])




useEffect(()=>{
  passwordGenerator()
},[count,numberAllowed,characters])

  return (
    <>
    <div className=' bg-gray-500 min-h-screen flex justify-center items-center'>
      <div className='bg-gray-600 mx-auto w-full max-w-xl rounded-lg p-15'>
         <h1 className='text-3xl font-bold text-center  text-white '>Password Generator</h1>
          <div className='flex justify-center gap-2 items-center mt-5'>

            <input type="text"
            value={password}
            className='w-90 h-10 p-2 bg-white outline-none border-2'
            ref={passwordRef}
            />

            <button className='text-white bg-blue-700 p-2 rounded-xl'
            onClick={copyToClipBoard}
            >Copy</button>
          </div>

          <div className='flex justify-center items-center mt-5 gap-5 text-xl '>

            <label htmlFor="length">length:{count} </label>
            <input type="range" min={8} max={16} id='length'
            value={count}
            onChange={(e)=>{setCount(Number(e.target.value))}}
            />  

            <label htmlFor="numbers">Numbers</label>
            <input type="checkbox" id='numbers'
             defaultChecked={numberAllowed}
             onChange={()=>{setNumberAllowed((prev)=>!prev)}}
             />
          
            <label htmlFor="characters">Characters</label>
            <input type="checkbox" id='characters' 
            defaultChecked={characters}
            onChange={()=>{setCharacters((prev)=>!prev)}}
            />
          </div>  
    </div>
    </div>
   
    </>
  )
}

export default App
