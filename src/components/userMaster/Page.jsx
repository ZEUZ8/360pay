import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const Page = () => {
  const [users, setUsers] = useState([
    { userName: "sinan", password: "sina@123", privilage: "admin" },
    { userName: "fasal", password: "fasal@123", privilage: "user" },
  ]);

  const handleUser = (value)=>{
  console.log(value,' the vaou')
  setUsers((prev)=>{
    return [...prev,value]
  })
    // console.log('the user in teh side ')
  }

  return (
    <div>
      <div className="grid max-md:grid-rows-12 md:grid-cols-2 h-[100vh] md:h-[70vh] md:justify-center md:items-center">
        <div className="max-md:row-start-2 max-md:row-span-2 md:col-span-2 grid items-end justify-center pb-5 ">
          <img src="/imgs/blueIcon.png" alt="icon" />
        </div>
        <div className="max-md:row-start-5 max-md:row-span-4 mx-12 ">
          <h1 className=" pb-2 xl:text-xl font-medium">User Master</h1>
          <div className="p-5 bg-white rounded-xl shadow-special ">
            <Form handleUser={handleUser}/>
          </div>
        </div>
        <div className="mt-5 pt-5 max-md:row-span-2  w-full md:items-start  p-1">
          <Table  users={users}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
