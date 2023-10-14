import React from 'react'

export default function newsletter() {
  return (
    <div className='w-full bg-black text-white py-16 text-blue px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 '>
                <h1 className="text-white md:text-4xl sm:text-3xl text-2xl  py-2 font-extrabold uppercase">MAnage the activities</h1>
                <p >Lorem ipsum dolor sit amet consectetur,   </p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md ' type="email" placeholder='enter text' />
                <button className="bg-blue-500 w-[200px] rounded-md font-mono my-6  ml-4 px-3 py-3 text-white">Notify me</button>
                </div>
                <p className=''>we care about your design and data protection <span className='text-blue-500'>privacy policy</span></p>
            </div>
        </div>
    </div>
  )
}
