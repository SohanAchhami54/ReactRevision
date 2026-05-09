//this is custom hook in react.

import { useEffect, useState } from "react"

const currencyConverter=(currency)=>{
    const [rate,setRate]=useState({})
    useEffect(()=>{
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
    .then(res=>res.json())
    .then(res=>setRate(res.rates))
    .catch(err=>console.log('Error occur while fetching the data:',err))
   },[currency]) 
   return rate
}
export default currencyConverter