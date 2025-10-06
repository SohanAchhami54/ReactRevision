import { useState } from "react"
import {InputBox} from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
function App() {
const [amount,setAmount]=useState(0);
const [from,setFrom]=useState("USD");
const [to,setTo]=useState("NPR");
const [convertedAmount,setConvertedAmount]=useState(0);

const currencyInfo=useCurrencyInfo(from);

const Options=Object.keys(currencyInfo);


const convert=()=>{
  setConvertedAmount(amount*currencyInfo[to])
}



  return (
    <>
    <div className="bg-gray-700 h-screen ">
         <h1 className="text-3xl text-white ">Currency Converter</h1>
          <form onSubmit={(e)=>{
            e.preventDefault();
            convert()
          }}
          >
           <InputBox
           label="From"
           amount={amount}
           currencyOptions={Options}
           onAmountChange={(curAmount)=>
            setAmount(curAmount)
           }
           onCurrencyChange={(currency)=>
            setAmount(amount)
           }
           selectCurrency={from}
         

           />

          <br />

          <InputBox
           label="To"
           amount={convertedAmount}
           currencyOptions={Options}
           onCurrencyChange={(currency)=>
              setTo(currency)
           }
           selectCurrency={to}
           amountDisabled={true}

           />

           <button type="submit"  className="text-4xl text-white my-10">Convert {from.toUpperCase()} To 
            {to.toUpperCase()} 
            </button>

          </form>
    </div>
    
    </>
  )
}

export default App
