import React, { useState } from 'react'
import Form from './Form'

const Page = () => {
  const [image,setImage] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dperson%2Bicon&psig=AOvVaw18SpiNmF-6xNyJi0-vWBi8&ust=1707209407268000&source=images&cd=vfe&opi=89978449&ved=0CBUQjhxqFwoTCKjolOTok4QDFQAAAAAdAAAAABAF")
  const [userName,setUsername] = useState("name")

  const handleImage = ()=>{
    console.log("user over here")
  }

  return (
    <div className="grid max-md:grid-rows-12 md:grid-cols-2 h-[100vh] md:justify-center md:items-center ">
      
    <div className="max-md:row-start-2   max-md:row-span-3 grid items-end justify-center pb-5  ">
      <img className='w-40 h-40 bg-red-600 rounded-full' src="/imgs/person.png" alt="icon" />
      <div className='flex gap-0 justify-center items-center'>
      <h1 className=' p-3 text-center'>{userName}</h1>
      <img className='w-4 h-4' src="./imgs/yes.png" alt="verified" />
      </div>
    </div>

    <div className="pt-5 max-md:row-span-6 mx-12 pb-3">
      <h1 className=" pb-3 xl:text-xl font-medium">Employee Details</h1>
      <div className="p-5 bg-white rounded-xl shadow-special">
        <Form />
      </div>
    </div>

  </div>
  )
}

export default Page
