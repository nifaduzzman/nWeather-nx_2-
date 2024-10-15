"use client"
import React, { useEffect, useState } from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdPushPin } from "react-icons/md";


function HeroSection() {
  const [data,setData]= useState<any|null>()
  const [loc,setLoc] = useState<any>("dhaka")
  const [btn2,setBtn2] = useState(false)

  useEffect(()=>{
      const fetchData= async()=>{
        // const res=await fetch('https://api.openweathermap.org/data/2.5/weather?lat=25.6221&lon=88.6438&exclude=hourly,daily&appid=5353a65caa2bbf32482c53e8ef9afbf8')
          try {
            
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=5353a65caa2bbf32482c53e8ef9afbf8`)
            
            console.log(loc)
            const data=await res.json()
            setData(data)
          } catch (error) {
            setData(error)
          }
        }
        if(loc){
        fetchData()
        }
      
    },[loc])
  
  useEffect(()=>{
    localStorage.setItem("loc",loc)
  },[btn2])

  return (
    <section className='min-h-[60vh] bg-slate-200 dark:bg-slate-800 flex flex-col justify-center items-center'>
      
          <div className='w-full flex justify-center'>
            <input type="text" className='w-[80%] md:w-[20%] h-10  px-2 py-1 rounded-md outline-none dark:text-slate-900'  onChange={(e)=>setLoc(e.target.value)} value={loc} placeholder='Enter location' spellCheck="false"/>
            
            <button className='text-2xl px-2 py-1' onClick={()=>setBtn2(!btn2)} ><MdPushPin  className={` ${localStorage.getItem("loc")==loc?' text-orange-400  ':null})}  hover:text-orange-500 active:text-orange-600`} /></button>
          </div>
          {
            !data?(<h1 className='w-full md:w-[80%]  h-[40vh] flex justify-around  py-12 items-center text-4xl'>Loading...</h1>):data.message=="city not found" || data.message=="Nothing to geocode"?<h1 className='w-full md:w-[80%]  h-[40vh] flex justify-around  py-12 items-center text-4xl'>Invalid location</h1>:(
              <div className='w-full md:w-[80%]  h-[40vh] flex justify-around    py-12 items-center'>
                <div className='flex flex-col justify-center items-center gap-2' >
                  <p className=' text-6xl'>{(data.main.temp-273.15).toFixed(2)}<span className='text-orange-400'>°</span> C</p>
                  <p className='text-xl text-slate-500'>Temperature</p>
                </div>
                <div className=' flex flex-col'>
                  <p className='text-xl dark:text-slate-500 text-slate-400 w-full flex justify-between'> Humidity: <span className='text-2xl dark:text-slate-100 text-slate-900   '>{data.main.humidity} %</span></p>
                  <p className='text-xl dark:text-slate-500 text-slate-400 w-full flex justify-between'> wind: <span className='text-2xl dark:text-slate-100 text-slate-900'>{data.wind.speed} m/s</span></p>
                </div>

                <div>
                  <p className='text-4xl'>{data.weather[0].description}</p>
                  <p className='text-xl text-slate-500 flex gap-1 items-center'><FaLocationCrosshairs className='text-sky-400/50'/>{data.name}, <span>{data.sys.country}</span></p>

                </div>
              </div>
            )
          }
        
    </section>
  )
}

export default HeroSection
