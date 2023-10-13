import React,{useState} from 'react'
import './header.css'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'


export default function header() {
        const [nav , setNav] = useState(false)

        const handleNav =()=>{
          setNav(!nav)
        }
  return (  


   <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4 h-20'>
    <h1 className='w-full text-3xl font-bold text-blue-600'>Tailwind</h1>
    <ul className='hidden md:flex'>
      <li className='p-4'>HOME</li>
      <li className='p-4'>Company</li>
      <li className='p-4'>Resources</li>
      <li className='p-4'>About</li>
      <li className='p-4'>Contact</li>
    </ul>
    <div onClick={handleNav} className='block md:hidden'>

      {!nav ? <AiOutlineClose size ={20}/> : <AiOutlineMenu size={20}/>}

    </div>
    <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full  bg-white ease-in-out duration-500 ': 'fixed left-[-100%] '}>
    <h1 className='w-full text-3xl font-bold text-blue-600 m-4'>Tailwind</h1>

      <ul className='p-4 uppercase'>
        <li className='p-4 border-b border-gray-400'>HOME</li>
        <li className='p-4 border-b border-gray-400'>Company</li>
        <li className='p-4 border-b border-gray-400'>Resources</li>
        <li className='p-4 border-b border-gray-400'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      
    </div>
   </div>
  )
}
