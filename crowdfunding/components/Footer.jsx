import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center text-white backgroundMain'>
      <div className="flex flex-col items-center justify-center py-5 px-4 space-y-3">
        <ul className='flex justify-center items-center gap-5'>
          <li className='font-medium tracking-wide text-gray-100 transition-colors duration-200
                            hover:text-teal-200'>
            <Link href='/'>Home</Link>
          </li>
          <li className='font-medium tracking-wide text-gray-100 transition-colors duration-200
                            hover:text-teal-200'>
            <Link href='/'>Proposal</Link>
          </li>
          <li className='font-medium tracking-wide text-gray-100 transition-colors duration-200
                            hover:text-teal-200'>
            <Link href='/'>Donation</Link>
          </li>
          <li className='font-medium tracking-wide text-gray-100 transition-colors duration-200
                            hover:text-teal-200'>
            <Link href='/members'>Members</Link>
          </li>
        </ul>
        <p className='text-sm font-semibold space-x-2 mb-4'>&copy;2023 Decentralized Crowdfunding</p>
      </div>
    </footer>
  )
}

export default Footer