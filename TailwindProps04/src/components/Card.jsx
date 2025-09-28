import React from 'react'

const Card = ({title,description}) => {
  return (
    <>
      <div className='flex flex-col bg-amber-300 m-10 p-10'>
        <h1>Title: {title} </h1>
        <h2>Description: {description}</h2>

      </div>
    </>
  )
}

export default Card
