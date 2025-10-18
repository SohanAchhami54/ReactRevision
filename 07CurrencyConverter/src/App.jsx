// import { useState } from "react"
// import {InputBox} from "./components"
// import useCurrencyInfo from "./hooks/useCurrencyInfo"
// function App() {
// const [amount,setAmount]=useState(0);
// const [from,setFrom]=useState("USD");
// const [to,setTo]=useState("NPR");
// const [convertedAmount,setConvertedAmount]=useState(0);

// const currencyInfo=useCurrencyInfo(from);
// const Options=Object.keys(currencyInfo);


// const convert=()=>{
//   setConvertedAmount(amount*currencyInfo[to])
// }



//   return (
//     <>
//     <div className="bg-gray-700 h-screen ">
//          <h1 className="text-3xl text-white ">Currency Converter</h1>
//           <form onSubmit={(e)=>{
//             e.preventDefault();
//             convert()
//           }}
//           >
//            <InputBox
//            label="From"
//            amount={amount}
//            currencyOptions={Options}
//            onAmountChange={(curAmount)=>
//             setAmount(curAmount)
//            }
//            onCurrencyChange={(currency)=>
//             setAmount(amount)
//            }
//            selectCurrency={from}
         

//            />

//           <br />

//           <InputBox
//            label="To"
//            amount={convertedAmount}
//            currencyOptions={Options}
//            onCurrencyChange={(currency)=>
//               setTo(currency)
//            }
//            selectCurrency={to}
//            amountDisabled={true}

//            />

//            <button type="submit"  className="text-4xl text-white my-10">Convert {from.toUpperCase()} To 
//             {to.toUpperCase()} 
//             </button>

//           </form>
//     </div>
    
//     </>
//   )
// }

// export default App

// import  { useState } from 'react'
// import InputBox from './components2/InputBox'
// import useCurrencyInfo from './hooks2/useCurrencyInfo';

// const App = () => {
//   const [amount,setAmount]=useState(0);
//   const [from,setFrom]=useState("USD");
//   const [to,setTo]=useState("NPR");

//   const currencyConv=useCurrencyInfo(from);
//   const options=Object.keys(currencyConv);

//   return (
//     <div>
      
//       <form onSubmit={(e)=>e.preventDefault()}>
//       <h1>hello</h1>
//       <InputBox
//        label='From'
//        amount={amount}
//        currencyOptions={options}
//        onAmountChange={(curAmount)=>setAmount(curAmount)}
//        onCurrencyChange={(currency)=>setFrom(currency)}
//        selectCurrency={from}
//        currencyDisabled
//        />
//        </form>
//     </div>
    
//   )
// }

// export default App
import React, { useState } from 'react'

import useCurrencyInfo from './hooks2/useCurrencyInfo';
import { InputBox } from './components2';

const App = () => {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("USD");
  const [to,setTo]=useState("NPR");
  const [convertedAmount,setConvertedAmount]=useState(0);
  const currencylist=useCurrencyInfo(from);
  const options=Object.keys(currencylist)


  const convert=()=>{
    setConvertedAmount(amount*currencylist[to])
  }
   

  return (
    <div className='flex justify-center items-center mt-10 mx-auto container bg-gray-400 rounded-lg'>
      <form onSubmit={(e)=>{
        e.preventDefault()
        convert()
      }}>
      <h1>My name is sohan achhami</h1>
      {/* from  */}
      <InputBox
      label='From'
      amount={amount}
      currencyOptions={options}
      onAmountChange={(curAmount)=>setAmount(curAmount)}

      currencyDisabled
      />
    <br />
      
      {/* to  */}
      <InputBox 
       label='To'
       amount={convertedAmount}
       amountDisabled
       onCurrencyChange={(currency)=>setTo(currency)}
       currencyOptions={options}
       selectCurrency={to}
      />
    
    <button className=''>Convert</button>

      </form>
    </div>
  )
}

export default App
