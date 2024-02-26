import React from 'react'

const SearchResultsList = ({suggestions,setSuggestions,setInput,suggestionCount,setShow}) => {


  const handleClick = (data)=>{
    setInput(data)
    setShow(false)
  }
  
  return (
    <div className={` w-full bg-gray-50  shadow-special flex flex-col rounded-lg max-h-[300px]  overflow-y-scroll scrollbar-hide  text-gray-400 p-2`}>
        {
            suggestions.map((suggestion,id)=>{
              console.log(suggestion,' the suggestion')
                return <div className={`${id === suggestionCount && `text-blue-300 mx-1`} cursor-pointer p-1`} onClick={()=>handleClick(suggestion)} key={id}>{suggestion.empName}</div>
            })
        }

    </div>
  )
}

export default SearchResultsList
