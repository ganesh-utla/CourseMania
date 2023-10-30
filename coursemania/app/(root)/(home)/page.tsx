import Filters from '@/components/Filters'
import Header from '@/components/Header'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'
import React from 'react'

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined}
}

const Home = async ({ searchParams } : Props) => {

  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  });

  const resourcesPlaylist = await getResourcesPlaylist();


  return (
    <main className='flex-center paddings mx-auto max-w-screen-2xl w-full flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 text-white'>
            CourseMania Resources
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filters />


      {(searchParams?.category || searchParams?.query) && (
        <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
        
          <Header 
            category={searchParams?.category || ""}
            query={searchParams?.query || ""}
          />

          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            {resources.length > 0? (
              resources.map((resource: any) => (
                <ResourceCard 
                  id={resource._id}
                  key={resource._id}
                  image={resource.image}
                  title={resource.title}
                />
              ))
            ) : (
              <p className='body-regular text-white-400'>No resources found</p>
            )}
          </div>
        </section>
      )}

      {resourcesPlaylist.map((item: any) => (
        <section key={item._id} className='flex-center mt-6 w-full flex-col sm:mt-20'>
          
          <h1 className='text-white-800 self-start heading3'>{item.title}</h1>

          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            {item.resources.length > 0? (
              item.resources.map((resource: any) => (
                <ResourceCard 
                  id={resource._id}
                  key={resource._id}
                  image={resource.image}
                  title={resource.title}
                />
              ))
            ) : (
              <p className='body-regular text-white-400'>No resources found</p>
            )}
          </div>
        </section>
      ))}
      
    </main>
  )
}

export default Home