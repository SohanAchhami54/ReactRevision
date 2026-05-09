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

















 














// import React, { useId } from 'react'

// const InputBox = ({
//   amount,
//   label,
//   onAmountChange,
//   onCurrencyChange,
//   selectCurrency="USD",
//   currencyOption=[],
//   amountDisabled=false,
//   currencyDisabled=false
// }) => {
//     const amountId=useId()
//     const currencyId=useId()
//   return (
//     <>
//          <div className='flex justify-center items-center gap-5 '>
//             <div className='flex flex-col'>
//             <label htmlFor={amountId}>{label}</label>
//             <input type="number" id={amountId}
//              value={amount}
//              onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
//              disabled={amountDisabled}
//             className='border-2 border-red-950 bg-amber-100  rounded-lg' />
//             </div>

//             <div className='flex flex-col'>
//               <label htmlFor={currencyId}>CurrencyOption</label>
//               <select
//               id={currencyId}
//               value={selectCurrency}
//               onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
//               disabled={currencyDisabled}
//               className='border-2 border-blue-700 rounded-lg'
//               >
//                 {
//                     currencyOption.map((currency)=>{
//                         return (
//                             <option key={currency} value={currency}>
//                                 {currency}
//                             </option>
//                         )
//                     })
//                 }
//               </select>
//             </div>
//          </div> 
//     </>
//   )
// }

// export default InputBox
