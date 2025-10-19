import { useEffect, useState, } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data=useLoaderData()
  console.log("data",data);
    // const [data,setData]=useState("");
    // useEffect(()=>{
    //   fetch(`https://api.github.com/users/SohanAchhami54`)
    //   .then((res)=>res.json())
    //   .then((data)=> {
    //    console.log("data:",data)
    //    setData(data)
    //   })
    // },[]);
  return (
    <>
      <div className='bg-gray-700 text-white mx-auto container flex flex-wrap justify-center items-center gap-2 mt-5'>
        <h1>Name:{data.name} </h1>
        <h1>Followers:{data.followers} </h1>
        <h2>Following:{data.following} </h2>
        <img src={data.avatar_url} className='w-50 my-2 rounded-lg ' alt="Sohan_pic" />
        {/* <p>{data} </p> */}
      </div>
    </>
  )
}

export default Github

//github page load huda yo paila nai load vai sakxa hai.
export const gitHubLoaderInfo=async()=>{
    const response=await fetch('https://api.github.com/users/SohanAchhami54');
    return response.json();
}