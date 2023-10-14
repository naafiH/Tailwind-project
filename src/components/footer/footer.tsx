import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
}from 'react-icons/fa'

export default function footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-300 gap-8 bg-black'>
        <div>
            <h6 className='w-full text-3xl font-bold text-blue-600 m-4'>Tailwind.</h6>
            <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto officia omnis dignissimos facere.</p>
            <div className='flex justify-between my-6 md:w-[75%]'>
                <FaFacebookSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>

        <div className='lg:col-span-2 mt-6  flex justify-between'>
            <div>

            <h6 className='font-medium text-gray-400'>solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>insights</li>
            </ul>
            </div>
        
            <div>

            <h6 className='font-medium text-gray-400'>solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>insights</li>
            </ul>
            </div>
            <div>

            <h6 className='font-medium text-gray-400'>solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>insights</li>
            </ul>
            </div>
            <div>

            <h6 className='font-medium text-gray-400'>solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>insights</li>
            </ul>
            </div>
        </div>
    </div>
  )
}
