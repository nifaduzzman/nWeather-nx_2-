import React from 'react'
import ThemeToggle from './ThemeToggle'
import { GrFavorite } from "react-icons/gr";
function Navbar() {
  return (
    <nav className='flex items-center justify-between md:px-16 px-8 py-4 bg-slate-50 dark:bg-slate-900 '>
      <h1 className='text-4xl font-bold text-orange-400 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors  cursor-pointer '>nWeather(nx_2)</h1>
      <div className='flex gap-10 *:cursor-pointer text-slate-900 dark:text-slate-200 text-2xl'>
        <GrFavorite />
        <ThemeToggle />
      </div>
      
    </nav>
  )
}

export default Navbar
