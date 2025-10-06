import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data,setData]=useState({});
     
    useEffect(()=>{
     fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
     .then((res)=>{
       return res.json();
     })
     .then((res)=>{
        setData(res.rates);  
     })
    },[currency]) //currency is the dependencies of this function.

   console.log(data);
   return data;
}

export default useCurrencyInfo;
