import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-zinc-800 text-white px-4 py-2 h-17'>

            <div className='container mx-auto flex justify-between items-center'>
                {/* lOGO */}
                <div className=''>
                    <p>Comapny Logo</p>
                </div>

                {/* Menu */}
                <nav>
                    <Link href="/" className='hover:text-green-500'>Home</Link>
                    <Link href="/services" className='hover:text-green-500'>Services</Link>
                    <Link href="/about-us" className='hover:text-green-500'>About-Us</Link>
                    <Link href="/teams" className='hover:text-green-500'>Teams</Link>
                    <Link href="/faq" className='hover:text-green-500'>FAQ</Link>
                </nav>

                <Link href="/">
                    contact us
                </Link>

            </div>


        </div>
    )
}

export default Header