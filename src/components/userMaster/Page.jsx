import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import { AppContext } from "../../Context/AppProvider";
import { getUserMasterList } from "../../Api/services/userServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate()
  const { users, setUsers, loading, setLoading } = useContext(AppContext);
  const [duplicateUser, setDuplicateUser] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getUserMasterList();
        setUsers(response?.data?.data);
      } catch (erro) {
        // console.log(erro,' err')
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleUser = (value) => {
    setUsers((prev) => {
      return [...prev, value];
    });
  };

  return (
    <>
      <div className="">
        <ToastContainer />
        <div className="grid items-center justify-center ">
          <img
            src="/imgs/192x192.png"
            alt="icon"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="px-4">
          <div
            className={`${
              duplicateUser &&
              `flex items-center justify-between bg-purple-400 `
            }`}
          >
            <h1 className=" xl:text-xl font-medium">User Master</h1>
            {duplicateUser && (
              <h1 className="xl:text-md text-rose-500 font-medium">
                User Exists
              </h1>
            )}
          </div>
        </div>
        <div className="  grid md:grid-cols-6">
          <div className="col-span-6 md:col-span-3  p-4 max-md:w-full">
            <Form
              handleUser={handleUser}
              setDuplicateUser={setDuplicateUser}
              users={users}
            />
          </div>
          <div className="col-span-6 md:col-span-3 p-3">
            <div className="max-h-[40vh] md:max-h-[50vh] overflow-x-auto max-w-[100vw] border-2 rounded-lg">
              {users ? (
                <Table />
              ) : (
                <>
                  <img src="/imgs/empty.jpg" alt="" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
