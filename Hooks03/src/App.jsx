import { useState } from "react";
function App() {
  const [counter,setCounter]=useState(10);

  const handleAdd=()=>{
    if(counter<25){
        setCounter(counter+1);
    }
}

  const handleRemove=()=>{
    if(counter>0){
     setCounter(counter-1);
    }
  }
  return (
    <div>
       <h1>I am learning hooks</h1>
       <h2>{counter}</h2>
      <button onClick={handleAdd}>Add</button>
      <h2>{counter} </h2>
      <button onClick={handleRemove}>Remove</button>
      <h2>{counter} </h2>
    </div>
  )
}

export default App
