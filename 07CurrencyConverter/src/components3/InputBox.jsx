import React, { useId } from 'react'

const InputBox = ({
  amount,
  label,
  onAmountChange,
  onCurrencyChange,
  selectCurrency="USD",
  currencyOption=[],
  amountDisabled=false,
  currencyDisabled=false
}) => {
    const amountId=useId()
    const currencyId=useId()
  return (
    <>
         <div className='flex justify-center items-center gap-5 '>
            <div className='flex flex-col'>
            <label htmlFor={amountId}>{label}</label>
            <input type="number" id={amountId}
             value={amount}
             onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
             disabled={amountDisabled}
            className='border-2 border-red-950 bg-amber-100  rounded-lg' />
            </div>

            <div className='flex flex-col'>
              <label htmlFor={currencyId}>CurrencyOption</label>
              <select
              id={currencyId}
              value={selectCurrency}
              onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
              disabled={currencyDisabled}
              className='border-2 border-blue-700 rounded-lg'
              >
                {
                    currencyOption.map((currency)=>{
                        return (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        )
                    })
                }
              </select>
            </div>
         </div> 
    </>
  )
}

export default InputBox
