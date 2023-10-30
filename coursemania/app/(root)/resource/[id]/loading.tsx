import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <main className='flex-center paddings mx-auto max-w-screen-2xl w-full flex-col'>
        <section className='nav-padding hero-height flex w-full flex-col items-center justify-center gap-10 lg:flex-row'>
            <div className='flex flex-1 flex-col items-start justify-center'>
                <Skeleton className="h-10 w-52 rounded-lg bg-black-400 mb-2.5" />
                <Skeleton className="h-20 w-full rounded-lg bg-black-400" />
                <div className='flex mt-6 flex-col gap-2.5'>
                    <Skeleton className="h-5 w-20 rounded-lg bg-black-400" />
                    <Skeleton className="h-5 w-60 rounded-lg bg-black-400" />
                    <Skeleton className="h-5 w-72 rounded-lg bg-black-400" />
                    <Skeleton className="h-5 w-80 rounded-lg bg-black-400" />
                    <Skeleton className="h-5 w-60 rounded-lg bg-black-400" />
                    <Skeleton className="h-5 w-90 rounded-lg bg-black-400" />
                </div>

                <div className='mt-10'>
                    <Skeleton className="h-12 w-40 rounded-lg bg-black-400" />
                </div>
            </div>
            <div className='flex flex-1 justify-center lg:mb-12 lg:justify-end lg:pr-12'>
                <Skeleton className="h-[400px] w-[300px] rounded-lg bg-black-400" />
            </div>
        </section>
    </main>
  )
}

export default loading