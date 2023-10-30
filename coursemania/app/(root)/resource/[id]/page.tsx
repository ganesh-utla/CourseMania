import { getResource } from '@/sanity/actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async ({ params } : { params : { id: string }}) => {

    const { id } = params;

    const resource = await getResource(id);

  return (
    <main className='flex-center paddings mx-auto max-w-screen-2xl w-full flex-col'>

        <section className='nav-padding hero-height flex w-full flex-col items-center justify-center gap-10 lg:flex-row'>
            <div className='flex flex-1 flex-col items-start justify-center'>
                <p className='text-gradient_blue body-regular mb-2.5 text-center uppercase'>
                    COURSEMANIA RESOURCES
                </p>
                <h1 className='sm:heading2 heading3 text-white'>
                    {resource[0].title}
                </h1>
                <div className='mt-6 text-[20px] text-white-800'>
                    <p>With Over:</p>
                    <ul className='paragraph-regular [&>li]:ml-8 [&>li]:list-disc'>
                        <li>17+ chapters packed with example source code</li>
                        <li>comprehensive answers to popular interview questions</li>
                        <li>best practices</li>
                        <li>useful tips & tricks</li>
                    </ul>
                    ...this eBook is a must-have for any web devloper
                </div>

                <div>
                    <Link 
                        href={resource[0].resourceLink} 
                        target='_blank'
                        className='text-white gradient_purple flex-center body-semibold mt-10 h-fit w-fit gap-1 rounded-md px-6 py-4'>
                        Check Out Now
                    </Link>
                    <div className='relative ml-28 mt-6 hidden h-[218px] w-[425px] lg:flex'>
                        <Image 
                            src="/arrow_trail.svg"
                            alt="arrow trail"
                            fill
                            className='object-contain rounded-lg'  
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-1 justify-center lg:mb-12 lg:justify-end lg:pr-12'>
                <Image 
                    src={resource[0].image}
                    alt="resource book"
                    width={370}
                    height={470}
                    className='object-contain rounded-lg lg:rotate-12'  
                />
            </div>
        </section>


        <section className='mt-10 flex flex-col items-center'>
            <h1 className='heading3 my-12 max-w-3xl text-center font-semibold text-white'>
                If you’re interested in adding some courses that aren’t available here, <span className='text-gradient_blue-purple'>
                    then feel free to contact me for the access</span>
            </h1>

            <div>
                <div className='flex-center inner-width frame w-full max-w-5xl flex-col px-0 py-16 sm:px-8'>
                    <div className='sm-box sm-box-1 bg-black-100'></div>
                    <div className='sm-box sm-box-2 bg-black-100'></div>
                    <div className='sm-box sm-box-3 bg-black-100'></div>
                    <div className='sm-box sm-box-4 bg-black-100'></div>
                    <div className='sm-box sm-box-5 bg-black-100'></div>
                    <div className='sm-box sm-box-6 bg-black-100'></div>
                    <div className='sm-box sm-box-7 bg-black-100'></div>
                    <div className='sm-box sm-box-8 bg-black-100'></div>
                    <article className='flex flex-col gap-12 p-10 max-sm:px-6 max-sm:py-0'>
                        <h2 className='sm:heading2 heading3 max-w-xl text-center text-white'>
                            Connect with me, and let's build projects together
                        </h2>
                        <Link 
                            href="https://www.linkedin.com/in/ganesh-utla-888abc/" 
                            target='_blank'
                            className='relative mx-auto flex h-[62px]'
                        >
                            <div className='absolute -bottom-1 -right-1.5 z-10 flex h-[52px] w-full rounded-[5px] bg-white' />
                            <div className='flex-center sm:body-semibold small-bold z-20 h-full w-full gap-2 rounded-[5px] border-2 border-black-200 bg-primary px-6 py-[18px] !font-semibold text-white'>
                                Connect now
                                <Image
                                    src="/arrow_white.svg"
                                    alt="arrow white"
                                    width={13}
                                    height={10}
                                    className='object-contain'
                                />
                            </div>
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    </main>
  )
}

export default page