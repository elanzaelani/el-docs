import Link from 'next/link';
import React from 'react'
import {  MdOpenInNew } from "react-icons/md";

export default function Navbar() {
    return (
        <div>
            <nav className='bg-white p-6 shadow  flex items-center justify-between fixed top-0 left-0 right-0 px-8' >
                <div className='flex items-center gap-5 text-lg '>
                    <span className='text-lg font-bold'>
                        <img src="" alt="" />
                        <Link href="/" className='hover:text-blue-400 translate-x-2 transition-all'>ElDocs</Link>
                    </span>
                   <ul className='flex flex-row gap-3'>
                    <li>
                        <Link href="/documentasi" className='hover:text-blue-400 translate-x-2 transition-all'>Documentasi</Link>
                    </li>
                    <li>
                        <Link href="/blog" className='hover:text-blue-400 translate-x-2 transition-all'>Artikel</Link>
                    </li>
                   </ul>
                </div>
                <div className='flex gap-2 items-center text-lg '>
                    <Link href="https://github.com/elanzaelani">Github</Link>
                    <MdOpenInNew/>
                
                </div>

            </nav>
        </div>
    )
}
