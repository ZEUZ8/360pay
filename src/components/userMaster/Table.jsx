import React from "react";

const Table = ({users}) => {

  return (
    <>
      <div class="relative overflow-auto mt-2 rounded-lg "  style={{ maxHeight: "calc(100vh - 200px)" }}>
        <table class="w-[100%] md:w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400 rounded-sm">
          <thead class="text-xs text-gray-700   bg-gray-800 ">
            <tr>
              <th scope="col" class="px-6 py-3  text-white">
                SNo
              </th>
              <th scope="col" class="px-6 py-3  text-white">
                userName
              </th>
              <th scope="col" class="px-6 py-3 text-white">
                Password
              </th>
              <th scope="col" class="px-6 py-3 text-white">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,i) => {
                // console.log(user,' the user in tehcons')
              return (
                <>
                  <tr class="bg-white border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {i+1}
                    </th>
                    <td class="px-6 py-4">{user?.userName}</td>
                    <td class="px-6 py-4">{user.password}</td>
                    <td class="px-6 py-4">{user.privilage} </td>
                    {/* <td class="px-6 py-4">delete</td> */}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
