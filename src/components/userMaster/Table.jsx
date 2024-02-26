import React, { useContext, useState } from "react";
import "../../App.css";
import { FaRegEdit } from "react-icons/fa";
import Form from "./Form";
import { AppContext } from "../../Context/AppProvider";
import ToggleSwitch from "./ToggleSwitch";

const Table = () => {
  const { users } = useContext(AppContext);
  console.log(users, " tehe value");
  const [modal, setModal] = useState(false);
  const [row, setRow] = useState("");

  const handleClick = (data) => {
    setModal(true);
    setRow(data);
  };

  return (
    <>
      {modal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 text-white flex items-center justify-center bg-gray-900 bg-opacity-70   z-50">
          <div className=" w-[50%]">
            <Form className="" row={row} setModal={setModal} />
          </div>
        </div>
      )}
      <div className="mt-2 overflow-y-auto h-full scrollbar-hide rounded-lg max-h-[20rem]">
        <table className="w-[100%] md:w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400 rounded-sm">
          <thead className="text-xs text-gray-700   bg-gray-800 sticky top-0 z-10">
            <tr>
              <th
                scope="col"
                className="px-6 py-3  text-white border-x border-white"
              >
                SNo
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-white border-x border-white"
              >
                userName
              </th>
              {/* <th
                scope="col"
                className="px-6 py-3 text-white border-x border-white"
              >
                Password
              </th> */}
              <th
                scope="col"
                className="px-6 py-3 text-white border-x border-white"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-white border-x border-white"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-white border-x border-white text-center"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {users.length > 0 ? users.map((user, i) => {
              // console.log(user,' the user in tehcons')
              return (
                <>
                  <tr className="bg-white border-b dark:border-gray-700 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap flex justify-center"
                    >
                      {i + 1}
                    </th>
                    <td className="px-6 py-4">{user?.userName}</td>
                    {/* <td className="px-6 py-4">12345</td> */}
                    <td className="px-6 py-4">{user?.authorization} </td>
                    <td className="">
                      <div className=" flex justify-center h-[10%] z-0">
                        <ToggleSwitch currentUser={user} />
                      </div>
                    </td>
                    <td
                      className="px-9 py-4 flex justify-center items-center text-gray-400 active:text-gray-800 "
                      onClick={() => handleClick(user)}
                    >
                      <FaRegEdit />
                    </td>
                  </tr>
                </>
              );
            }): <>
            <div className="text-red-300 text-center">
              <p>No Data found, please add </p></div></>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
