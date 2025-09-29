import { useState } from 'react'
function App() {
  const [color,setColor] = useState("bg-gray-500")

  return (
    <div className={`h-screen relative flex justify-center ${color}`}>
      <h1 className='text-2xl'> i am learning the react series</h1>
           <div className='h-30 bg-white flex justify-around items-center absolute bottom-5 rounded border-2 w-200  shadow-2xl '>


              <button className='h-20 w-20 bg-red-600' 
              onClick={()=>setColor("bg-red-600")}
              >Red</button>

              <button className='h-20 w-20 bg-green-600'
              onClick={()=>setColor("bg-green-600")}
              >Green</button>

              <button className='h-20 w-20 bg-blue-600'
              onClick={()=>setColor("bg-blue-600")}
              >Blue</button>

              <button className='h-20 w-20 text-white bg-black'
              onClick={()=>setColor("bg-black")}
              >Black</button>

              <button className='h-20 w-20 text-black bg-white rounded border-2'
              onClick={()=>setColor("bg-white")}
              >White</button>

              <button className='h-20 w-20 bg-yellow-500'
              onClick={()=>setColor("bg-yellow-500")}
              >Yellow</button>
              <button className='h-20 w-20 bg-pink-700'
              onClick={()=>setColor("bg-pink-700")}
              >Pink</button>
              
           </div>
    </div>
  )
}

export default App
