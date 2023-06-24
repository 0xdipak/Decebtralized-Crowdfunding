import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className="backgroundMain fixed top-0 w-full">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="inline-flex items-center mr-8">
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                CW
              </span>
            </Link>
            <ul className="tems-center hidden space-x-8 md:flex ml-10">
              <li>
                <Link
                  href="/proposal"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200
                            hover:text-teal-200"
                >
                  Proposal
                </Link>
              </li>
              <li>
                <Link
                  href="/donation"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200
                            hover:text-teal-200"
                >
                  Donation
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200
                            hover:text-teal-200"
                >
                  Members
                </Link>
              </li>
            </ul>
          </div>

          <div className="items-center hidden space-x-8 md:flex">
            <button
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide
                    text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700
                    focus:shadow-outline focus:outline-none background"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar