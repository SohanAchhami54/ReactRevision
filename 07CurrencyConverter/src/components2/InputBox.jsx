import  { useId } from 'react'
const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="USD",
  amountDisabled=false,
  currencyDisabled=false,
}) => {
    const currencyId=useId();
  return (
    <>
    <div className=''>
    <div className='flex flex-wrap gap-3 justify-center items-center'>

    
      <div className='flex flex-col'>
        <label htmlFor={currencyId}>{label}</label>
        <input id={currencyId} className='border rounded-lg' 
        type="number"
        value={amount}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
        disabled={amountDisabled}

        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor="currencyOption">CurrencyOption</label>
        <select name="" id="currencyOption"
        value={selectCurrency}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisabled}

        >
            {
              currencyOptions.map((currency)=>{
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
      
      </div>
    </>
  )
}

export default InputBox
