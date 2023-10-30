import React from 'react'

interface Props {
    category: string;
    query: string;
}

const Header = ({ category, query } : Props) => {

    if (category && query) {
        return (
            <h1 className='heading3 self-start text-white-800'>
                Search Results for "{query}" in <span className='capitalize'>{category}</span>
            </h1>
        )
    }

    if (category) {
        return (
            <h1 className='heading3 self-start text-white-800'>
                <span className='capitalize'>{category}</span>
            </h1>
        )
    }

    if (query) {
        return (
            <h1 className='heading3 self-start text-white-800'>
                Search Results for "{query}"
            </h1>
        )
    }

  return (
    <h1 className='heading3 self-start text-white-800'>
        No Results
    </h1>
  )
}

export default Header