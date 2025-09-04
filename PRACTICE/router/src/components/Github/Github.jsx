import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
  const data = useLoaderData()
  console.log(data);
  
  return (<>
  <div className='flex justify-center items-center h-[70vh] gap-2.5 bg-amber-400 flex-col'>
    <h1 className='text-4xl'>Github Followers: {data.followers}</h1>
    <img src={data.avatar_url} alt="" />
  </div>
  </>
  )
}

export default Github

export const githubinfoloader = async()=>{
  const response = await fetch("https://api.github.com/users/Humza920")
  const data = await response.json()
  return data
}