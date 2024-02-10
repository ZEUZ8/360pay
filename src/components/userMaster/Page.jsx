import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import { AppContext } from "../../Context/AppProvider";

const Page = () => {
  const { users, setUsers } = useContext(AppContext);

  useEffect(() => {    
    setUsers([
      { userName: "sinan", password: "sina@123", privilage: "admin",userId:"sinan12" },
      { userName: "fasal", password: "fasal@123", privilage: "user",userId:"fasal12" },
    ]);
  }, []);

  const handleUser = (value) => {
    console.log(value, " the function for submitting and updation");
    setUsers((prev) => {
      return [...prev, value];
    });
  };

  return (
    <div>
      <div className="grid max-md:grid-rows-12 md:grid-cols-2 h-[100vh] md:h-[70vh] md:justify-center md:items-center">
        <div className="max-md:row-start-2 max-md:row-span-2 md:col-span-2 grid items-end justify-center pb-5 ">
          <img src="/imgs/blueIcon.png" alt="icon" />
        </div>
        <div className="max-md:row-start-5 max-md:row-span-4 mx-12 ">
          <h1 className=" pb-2 xl:text-xl font-medium">User Master</h1>
          <Form handleUser={handleUser} />
        </div>
        <div className="mt-5 pt-5 max-md:row-span-4  w-full grid md:items-start  p-3">
          <Table  />
        </div>
      </div>
    </div>
  );
};

export default Page;
