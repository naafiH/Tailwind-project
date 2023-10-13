import React from 'react'
import png1 from '../assets/png1.png'
import png2 from '../assets/png2.png'

export default function analytics() {
  return (
    <div className='w-full py-16  px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[400px] mx-auto  my-4' src={png2} alt="" />
            <div className='flex flex-col justify-center' >
                <p className='text-blue-500 font-bold'>Data Analytic Dashboard</p>
                <h1 className='md-text-4xl sm-text-3xl text-2xl font-bold py-2'>Manage Data analytic centrally</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa excepturi eveniet illo voluptate laboriosam reprehenderit libero, non suscipit eius exercitationem soluta veritatis nulla.</p>
                <button className="bg-black w-[150px] rounded-md font-mono my-6 mx-auto md:mx-0 py-3 text-white">Get Started</button>
            </div>
        </div>

    </div>
  )
}
