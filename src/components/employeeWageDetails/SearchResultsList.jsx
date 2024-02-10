import React from 'react'

const SearchResultsList = ({setResults,results,setInput,suggestionCount}) => {

  console.log(results[0],' the first balue getting rom the arrray')
  const handleClick = (data)=>{
    setInput(data.name)
    setResults([])
  }


  
  return (
    <div className={` w-full bg-gray-50  shadow-special flex flex-col rounded-lg max-h-[300px]  overflow-y-scroll scrollbar-hide  text-gray-400 p-2`}>
        {
            results.map((results,id)=>{
                return <div className={`${id === suggestionCount && `text-blue-300 mx-1`} cursor-pointer p-1`} onClick={()=>handleClick(results)} key={id}>{results.name}</div>
            })
        }

    </div>
  )
}

export default SearchResultsList
