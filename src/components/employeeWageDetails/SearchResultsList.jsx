import React from 'react'

const SearchResultsList = ({results}) => {
  return (
    <div className='w-full bg-gray-100 shadow-special flex flex-col rounded-lg max-h-[300px] overflow-y-scroll scrollbar-hide'>
        {
            results.map((results,id)=>{
                return <div key={id}>{results.name}</div>
            })
        }

    </div>
  )
}

export default SearchResultsList
