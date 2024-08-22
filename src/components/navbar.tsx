'use client';
import React, { useState } from 'react';
import Image from 'next/image'; 
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-green-400 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image src="/bukoni_icon.png" alt="Logo" width={50} height={50} />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <button className="text-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md">Home</button>
                                <button className="text-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md">Features</button>
                                <button className="text-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md">About Pay</button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <div className="relative">
                                <input type="text" name="search" id="name1" placeholder='Search' className='w-64 lg:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                                <button className='absolute min-h-[82%] right-0 top-0 my-1 mr-1 bg-green-500 text-white px-4 py-1 rounded-md hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500'>
                                    <FaSearch />
                                </button>
                            </div>
                            <button className="ml-4 text-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md">Download</button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <button className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Home</button>
                        <button className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">FeaturesG</button>
                        <button  className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Download</button>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="px-2">
                            <div className="relative mt-0">
                                <input type="text" name="search" placeholder='Search' className='w-full px-4 py-0 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                                <button className='absolute min-h-[82%] right-0 top-0 mt-0.5 mr-2 bg-green-500 text-white px-4 py-0 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500'>
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};