import { useId } from "react";

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency,
    amountDisabled=false,
    currencyDisabled=false,
    classname=""}) => {

        const amountInputId=useId();  // for linking the label and the input by generating the unique Id. 
  return (
    <>
       <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
        <div className='w-1/2'>
          <label htmlFor={amountInputId}  // for linking the label and the input by generating the unique Id. 
          className='text-black mb-2'>
            {label}
          </label>
            
            <input id={amountInputId}
             type="number" placeholder="Amount" 
             disabled={amountDisabled}
             value={amount}
             onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            className='outline-none w-full' />
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right '>
        <p className='text-black mb-2 w-full'>Currency Type</p>
         <select name="" id=""
         value={selectCurrency}
         onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
         disabled={currencyDisabled}
        >
         {
            currencyOptions.map((currency)=>{
                return (
                    <option  key={currency}  value={currency}> 
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
