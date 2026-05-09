import React from 'react'

const Search = ({
    cityname='Kathmandu',
    oncityChange,
    citySearch
}) => {
  return (
    <div className='flex gap-2 '>
       <input type="text"
        placeholder='Enter the city name'
        value={cityname} 
        onChange={(e)=>oncityChange && oncityChange(String(e.target.value))}
        className='border'/>
       <button className='p-1 bg-green-400 rounded-md' 
       onClick={citySearch}
       >Search</button>
    </div>
  )
}

export default Search
