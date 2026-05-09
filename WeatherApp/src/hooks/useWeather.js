import { useState } from "react"
import { useEffect } from "react"

const useWeather=(city)=>{ 
   const [data,setData]=useState(null)
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`)
        .then(res=>res.json()) 
        .then(res=>setData(res)) 
        .catch(err=>console.log('Error occur while fetching the Weather Data:',err))
    },[city]) 

    return data
}

export default useWeather