//this is custom hook in react.

import { useEffect, useState } from "react"
 const currencyConverter=(currency)=>{
    const [data,setData]=useState('');
    useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.rates))
        
    },[currency])
    return data;
  
 }
 export default currencyConverter;