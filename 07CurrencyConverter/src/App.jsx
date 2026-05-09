import React, { useEffect, useState } from 'react'
import InputBox from './components3/InputBox'
import currencyConverter from './hooks3/useCurrencyInfo'

const App = () => {
  const [from,setFrom]=useState('USD') 
  const [to,setTo]=useState('NPR') 
  const [amount,setAmount]=useState('')
  const [convertedAmount,setConvertedAmount]=useState('')


 
    const rates= currencyConverter(from) 
    const currencyOp= Object.keys(rates)
    
    const convert=()=>{
      setConvertedAmount(amount*rates[to])
    }
  

 
  return (
    <div className='flex flex-col gap-5 mx-auto max-w-md mt-5'>
      <InputBox
       label='From'
       amount={amount}  
        currencyOption={currencyOp}
       onAmountChange={(amount)=>setAmount(amount)}
       optionDisabled={true}
      />
      <InputBox
      label='To'
      amount={convertedAmount}
      selectedCurrency={to} 
       currencyOption={currencyOp} 
       oncurrencyChange={(currency)=>setTo(currency)}
       amountDisabled={true}
      
      /> 
      <button className='p-4 border rounded-md bg-green-500' 
       onClick={convert}
      >
        <span>{`Convert ${amount} ${from} to ${convertedAmount} ${to} `} </span>
      </button>
    </div>
  )
}

export default App
