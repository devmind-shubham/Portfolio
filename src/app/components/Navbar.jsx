"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
]
function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
            <div className="flex flex-wrap text-center justify-between mx-auto px-8 py-4">
                <Link href="/" className='text-2xl text-white font-semibold'>LOGO</Link>

                <div className='mobile-menu block md:hidden'>
                    {
                        navbarOpen ? (
                            <button onClick={() => setNavbarOpen(prevStatus => !prevStatus)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-4 w-4' />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(prevStatus => !prevStatus)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-4 w-4' />
                            </button>
                        )
                    }
                </div>

                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex flex-row p-8 md:p-0 mt-0 md:space-x-8'>
                        {navLinks.map((item, index) => {
                            return (
                                <li key={index}><NavLink href={item.href} title={item.name} /></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    )
}

export default Navbar
