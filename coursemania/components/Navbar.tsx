import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex fixed top-0 left-0 z-50 w-full bg-black-100 border-b-2 border-black-200 text-white py-7'>
        <div className='flex-between w-full mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
            <Link href="/">
                <div className='flex flex-center gap-2.5'>
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                    <div className='heading4' style={{color: "#4cbaba"}}>
                        Course<span style={{color: "#318181"}}>Mania</span>
                    </div>
                </div>
            </Link>

            <ul className='flex-center'>
                <li className='body-text !font-bold text-gradient_blue-purple'>
                    <Link href="https://github.com/ganesh-utla/CourseMania">
                        GitHub Repo
                    </Link>
                </li>  
            </ul>

        </div>

    </nav>
  )
}

export default Navbar