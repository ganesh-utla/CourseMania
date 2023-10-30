"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { formUrlQuery } from '@/sanity/schemas/utils'
import { useRouter, useSearchParams } from 'next/navigation'

const SearchForm = () => {

  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = (searchString: string) => {
    setSearchValue(searchString);
    let newUrl = "";
    if (searchString==="") {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'query',
        value: null
      })
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'query',
        value: searchString.toLowerCase()
      })
    }
    router.push(newUrl, { scroll: false });
  }

  useEffect(() => {
    const debounceFunc = setTimeout(() => {
      let newUrl = "";
      if (searchValue) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: searchValue
        })
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }
      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(debounceFunc);
  }, [searchValue])

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
        <label className='flex-center relative w-full max-w-3xl'>
            <Image
                src="/magnifying-glass.svg"
                alt="search"
                width={32}
                height={32}
                className='absolute left-8'
            />
            <Input 
                className="base-regular h-fit border-0 bg-black-400 text-white-800 py-6 pl-20 pr-8 !ring-0 !ring-offset-0 placeholder:text-white-800"
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </label>
    </form>
  )
}

export default SearchForm