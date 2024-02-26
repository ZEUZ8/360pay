import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import { AppContext } from "../../Context/AppProvider";
import axios from "axios";
import { axiosSiteDetailsInstance } from "../../Api/axios";
import { getUserMasterList } from "../../Api/services/userServices";

const Page = () => {
  const { users, setUsers } = useContext(AppContext);
  const [duplicateUser,setDuplicateUser] = useState(false)
  useEffect(() => {    
    (async () => {
        const response = await getUserMasterList()
        console.log(response,' the response in teh fucniton' )
        setUsers(response?.data?.data);
    })();
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
          <div className={`${duplicateUser && `flex items-center justify-between`}`}>
          <h1 className=" pb-2 xl:text-xl font-medium">User Master</h1>
          {duplicateUser && <h1 className=" pb-1  xl:text-md text-rose-500 font-medium">User Exists</h1>}
          </div>
          <Form handleUser={handleUser} setDuplicateUser={setDuplicateUser} users={users}/>
        </div>
        <div className="mt-5 pt-5 max-md:row-span-4  w-full grid md:items-start  p-3 ">
          <Table  />
        </div>
      </div>
    </div>
  );
};

export default Page;
