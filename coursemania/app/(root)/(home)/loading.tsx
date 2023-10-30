import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <main className="flex-center paddings mx-auto max-w-screen-2xl w-full flex-col">
        <section className='nav-padding w-full'>
            <Skeleton className="h-[274px] w-full rounded-lg bg-black-400" />
        </section>

        <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
            <Skeleton className="self-start h-10 w-56 bg-black-400" />

            <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
                <Skeleton className="h-[440px] w-full sm:w-[356px] bg-black-400" />
                <Skeleton className="h-[440px] w-full sm:w-[356px] bg-black-400" />
                <Skeleton className="h-[440px] w-full sm:w-[356px] bg-black-400" />
            </div>
        </section>
    </main>
  )
}

export default loading;