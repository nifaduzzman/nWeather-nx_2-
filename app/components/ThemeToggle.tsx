"use client"

import { useEffect, useState } from "react"
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";


function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(true)
  useEffect(()=>{
    if(localStorage.theme ==="light"){
      setDarkMode(false)
    }
  },[])
  useEffect(()=>{
    if(darkMode)localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")
    else localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark")
  
  },[darkMode])
  return (
    <div className="text-2xl text-slate-800 dark:text-slate-50 hover:text-slate-950 dark:hover:text-slate-50"
      onClick={()=>setDarkMode(!darkMode)}
    >

      {
        darkMode?<CiLight  />:<MdDarkMode />
      }

      
    </div>
  )
}

export default ThemeToggle
