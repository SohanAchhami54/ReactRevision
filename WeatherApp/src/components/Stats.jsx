import React from 'react'

const Stats = ({weatherData}) => {
  return (
    <div className='flex gap-2'>
         <h1>Visibility:{weatherData?.visibility}</h1> 
         <h1>Wind:{weatherData?.wind?.speed}</h1> 
         <h1>Sunrise:{weatherData?.sys?.sunrise} </h1>
         <h1>Sunset: {weatherData?.sys?.sunset} </h1>
    </div>
  )
}
export default Stats
