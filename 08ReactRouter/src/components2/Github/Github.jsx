import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data=useLoaderData();
  return (
    <div className='p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 bg-neutral-400 m-5 flex items-center gap-4'>
      <img src={data.avatar_url} alt="sohangithub" className='shadow-2xl w-100% transition-all duration-300 ease-end border-3 border-white/50 1s hover:scale-105' />
       <h1> Github Followers:{data.followers} </h1>
    </div>
  )
}

export default Github

export const useGithubInfo=async()=>{
 const response=await fetch('https://api.github.com/users/SohanAchhami54');
 return response.json();
}