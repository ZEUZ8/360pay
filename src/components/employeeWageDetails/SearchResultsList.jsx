import React from 'react'

const SearchResultsList = ({suggestions,setSuggestions,setInput,suggestionCount,setShow}) => {


  const handleClick = (data)=>{
    console.log(data,' the data consoling in the for test and in teh wage List showing')
    setInput(data?.empName)
    setShow(false)
  }
  
  return (
    <div className={` w-full bg-gray-100   shadow-special flex flex-col rounded-lg max-h-[300px]  overflow-y-scroll scrollbar-hide  text-gray-400 p-2 hover:bg-gray-50`}>
        {
            suggestions.map((suggestion,id)=>{
              // console.log(suggestion,' the suggestion')
                return <div className={`${id === suggestionCount && `text-blue-300 mx-1`} cursor-pointer ${id !== suggestionCount && "hover:px-3 hover:py-2"} p-1`} onClick={()=>handleClick(suggestion)} key={id}>{suggestion.empName}</div>
            })
        }

    </div>
  )
}

export default SearchResultsList
