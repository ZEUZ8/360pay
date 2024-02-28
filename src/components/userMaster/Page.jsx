import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import { AppContext } from "../../Context/AppProvider";
import { getUserMasterList } from "../../Api/services/userServices";

const Page = () => {
  const { users, setUsers } = useContext(AppContext);
  const [duplicateUser, setDuplicateUser] = useState(false);
  useEffect(() => {
    (async () => {
      const response = await getUserMasterList();
      setUsers(response?.data?.data);
    })();
  }, []);

  const handleUser = (value) => {
    setUsers((prev) => {
      return [...prev, value];
    });
  };

  return (
    <div className="bg-pink-300 h-[100vh]">
      <div className="grid max-md:grid-rows-12    md:items-center">
        <div className="  grid items-end justify-center pb-5 ">
          <img
            src="/imgs/256x256.png"
            alt="icon"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="bg-green-300  grid grid-cols-6">
          <div className="col-span-6 md:col-span-3 max-md:row-start-5  mx-12 max-md:w-full">
            <div
              className={`${
                duplicateUser && `flex items-center justify-between bg-purple-400 p-5`
              }`}
            >
              <h1 className=" pb-2 xl:text-xl font-medium">User Master</h1>
              {duplicateUser && (
                <h1 className=" pb-1  xl:text-md text-rose-500 font-medium">
                  User Exists
                </h1>
              )}
            </div>
            <Form
              handleUser={handleUser}
              setDuplicateUser={setDuplicateUser}
              users={users}
            />
          </div>
          <div className="col-span-6 md:col-span-3 p-3 bg-yellow-400">
          <div className="max-h-[70vh] overflow-y-auto">
            <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
