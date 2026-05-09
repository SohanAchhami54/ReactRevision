import React, { useId } from 'react'

const InputBox = ({
  label, 
  amount, 
  selectedCurrency='usd', 
  currencyOption, 
  oncurrencyChange, 
  onAmountChange,
  amountDisabled=false, 
  optionDisabled=false,
}) => {
  const amountselect=useId() 
  const optionselect=useId()
  return (
    <>
    <section>
      <h1>This is Currency Converter</h1>
      <section className='flex gap-5'>
       <section className='flex gap-2'>
           <span>{label}</span> 
           <label htmlFor={amountselect}></label>
           <input type="text" 
            id={amountselect}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            value={amount}
            disabled={amountDisabled}
            placeholder='Enter the amount'
            className='border-1' />
       </section>

       <section className='flex gap-2'> 
        <span>Currency Type</span>
        <label htmlFor={optionselect}></label>
         <select id={optionselect} 
          onChange={(e)=>oncurrencyChange && oncurrencyChange(e.target.value)}
          disabled={optionDisabled}
          value={selectedCurrency}
         >
              {
                currencyOption.map((currency)=>{
                  return (
                    <option value={currency} key={currency}> 
                       {currency}
                    </option>
                  )
                })
              }
         </select>

       </section>
       </section>
          </section>
    </>
  )
}

export default InputBox

















 












