import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 text-white-800 px-20 py-7 max-md:flex-col'>
        <p>Copyright © CourseMania | All Rights Reserved</p>
        <div className='flex gap-x-9'>
          <Link href="/">
            Terms and Conditions
          </Link>
          <Link href="/">
            Privacy Policy
          </Link>
        </div>
    </footer>
  )
}

export default Footer