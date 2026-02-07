import React from 'react'
import icon from '../assets/rotten-apple-icon.png'

const Header = () => {
  return (
    <>
      <header className='flex items-center flex-col shadow-md shadow-black/30 gap-y-1.5'>
        <div className='flex items-center'>
            <img src={icon} alt='Rotten Apple Icon' width={50}/>    
            <h1 className='text-3xl text-red-500/80 font-bold text-shadow-md text-shadow-red-500/40'>Rotten Apple's</h1>
        </div>
       
        <div className='flex gap-2  text-red-500/40 mb-2'>
            <a href="" className=' hover:text-red-500 duration-150 ease-in '> Famous Movies </a>
            |
            <a href="" className='hover:text-red-500 duration-150 ease-in'> Highly Rated</a>
        </div>
      </header>
    </>
  )
}

export default Header
