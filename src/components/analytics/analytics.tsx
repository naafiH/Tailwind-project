import React from 'react'
import png1 from '../assets/png1.png'
import png2 from '../assets/png2.png'

export default function analytics() {
  return (
    <div className='w-full py-16  px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={png2} alt="" />
            <div>
                <p>Data Analytic Dashboard</p>
                <h1>Manage Data analytic centrally</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa excepturi eveniet illo voluptate laboriosam reprehenderit libero, non suscipit eius exercitationem soluta veritatis nulla.</p>
                <button>Get Started</button>
            </div>
        </div>

    </div>
  )
}
