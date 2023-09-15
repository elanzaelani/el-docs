import Link from 'next/link'
import React from 'react'
import { MdOpenInNew } from 'react-icons/md'

export default function Footer() {
  return (
    <div>
      <div className='bg-gray-900 w-full  text-white pb-10'>
        <div className='max-w-7xl mx-auto flex justify-around grid-cols-3 py-4'>
          <div className='mt-5 '>
            <h3 className='text-xl font-bold'>Website</h3>
            <ul className='mt-5 text-lg font-bold'>
              <li>elzaelani.com</li>
            </ul>
          </div>
          <div className='mt-5 '>
            <h3 className='text-xl font-bold'>Sosial Media </h3>
            <ul className=' mt-5 text-lg font-bold'>
              <li className=' my-2'><Link href="" className='flex gap-2 items-center'>Facebook  <MdOpenInNew /></Link> </li>
              <li className='my-2'><Link href="" className='flex gap-2 items-center'>Instagram  <MdOpenInNew /></Link> </li>

            </ul>
          </div>
          <div className='mt-5 '>
            <h3 className='text-xl font-bold'>Links</h3>
            <ul className='mt-5 text-lg font-bold'>
              <li className='my-2'><Link href="" className='flex gap-2 items-center '>GitHub  <MdOpenInNew /></Link></li>
            </ul>

          </div>
        </div>
      <div className=''>
        <p className='flex justify-center text-xl font-bold mb-10'>Copyright © 2023 ElDocs.</p>
      </div>
      </div>
    </div>
  )
}
