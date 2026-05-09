import React from 'react'

const WeatherCard = ({weatherData}) => {
  return (
    <div>
        <div className='flex gap-3'>
         <h1>Weather Name: {weatherData?.name}</h1> 
        <h1>Country: {weatherData?.sys?.country} </h1>
        </div>

        <div>
            <h1>Min Temp: {weatherData?.main?.temp_min}</h1> 
            <h2>Max Temp: {weatherData?.main?.temp_max}</h2>
            <h1>Humidity: {weatherData?.main?.humidity} </h1>
        </div>
       
    </div>
  )
}
export default WeatherCard
