import React from 'react'

export default function LayoutDocumentasi({ children,
}: {
  children: React.ReactNode
}) {
  return (
    <nav className='fixed left-0 top-20 p-5 z-10 h-screen w-60 bg-blue-200 '>
      <ul className=''>
        <li>Home</li>
        <li>Documentasoi</li>
        <li>Artikel</li>
      </ul>
    </nav>
  )
  {children}
}
