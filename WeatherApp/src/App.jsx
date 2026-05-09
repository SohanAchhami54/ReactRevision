import React from 'react'
import Search from './components/Search'
import { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import Stats from './components/Stats'
import useWeather from './hooks/useWeather'

const App = () => {
   const [city,setCity]=useState('')
   const [triggerCity,setTriggerCity]=useState('')
   const weatherData=useWeather(triggerCity) 

   const searchCity=()=>{
        if(!city) return 
        setTriggerCity(city)
  
   }
  return (
    <div className='mx-auto max-w-md mt-7 '>
      <Search 
      cityname={city}
      oncityChange={(city)=>setCity(city)} 
      citySearch={searchCity}
      />
      <WeatherCard weatherData={weatherData} />
      <Stats  weatherData={weatherData} />
    </div>
  )
}
export default App
