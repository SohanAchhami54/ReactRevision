// import React, { useState } from 'react'

// import useCurrencyInfo from './hooks2/useCurrencyInfo';
// import { InputBox } from './components2';

// const App = () => {
//   const [amount,setAmount]=useState(0);
//   const [from,setFrom]=useState("USD");
//   const [to,setTo]=useState("NPR");
//   const [convertedAmount,setConvertedAmount]=useState(0);
//   const currencylist=useCurrencyInfo(from);
//   const options=Object.keys(currencylist)


//   const convert=()=>{
//     setConvertedAmount(amount*currencylist[to])
//   }
   

//   return (
//     <div className='flex justify-center items-center mt-10 mx-auto container bg-gray-400 rounded-lg'>
//       <form onSubmit={(e)=>{
//         e.preventDefault()
//         convert()
//       }}>
//       <h1>My name is sohan achhami</h1>
//       {/* from  */}
//       <InputBox
//       label='From'
//       amount={amount}
//       currencyOptions={options}
//       onAmountChange={(curAmount)=>setAmount(curAmount)}

//       currencyDisabled
//       />
//     <br />
      
//       {/* to  */}
//       <InputBox 
//        label='To'
//        amount={convertedAmount}
//        amountDisabled
//        onCurrencyChange={(currency)=>setTo(currency)}
//        currencyOptions={options}
//        selectCurrency={to}
//       />
    
//     <button className=''>Convert</button>

//       </form>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'
import InputBox from './components3/InputBox'
import currencyConverter from './hooks3/useCurrencyInfo'
function App() {
const [amount,setAmount]=useState(0)
const [from,setFrom]=useState("USD")
const [to,setTo]=useState("NPR")
const [convertedAmount,setConvertedAmount]=useState(0)

const currencyOptions=currencyConverter(from);
const options=Object.keys(currencyOptions);

const convert=()=>{
  setConvertedAmount(amount * currencyOptions[to])
}
  return (
    <>
    <div className='flex flex-col gap-4 justify-center  items-center bg-green-300 min-h-screen'>
      <h1>My name is sohan achhami.</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        convert()
      }}>
      <InputBox
      label='From'
      amount={amount}
      onAmountChange={(currency)=>setAmount(currency)}
      currencyOption={options}
      disabled={true}
      
      
      />
       <InputBox
       label='To'
       amount={convertedAmount}
       onCurrencyChange={(currency)=>setTo(currency)}
       currencyOption={options}
       amountDisabled={true}
       selectCurrency={to}

       />
       <button className='bg-amber-600 p-1 rounded-xl  m-2'>
        {`${from.toLocaleLowerCase()} to ${to.toLocaleLowerCase()}`}
       </button>
       </form>
    </div>
    </>
  )
}

export default App
