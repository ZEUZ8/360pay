import React from "react";

const Table = () => {
  return (
    <>
      <div class="relative overflow-auto mt-2 rounded-lg ">
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
            <tr class="bg-white border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                1
              </th>
              <td class="px-6 py-4">sinan</td>
              <td class="px-6 py-4">Sinan@123</td>
              <td class="px-6 py-4">Worker</td>
            </tr>
            <tr class="bg-white border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                2
              </th>
              <td class="px-6 py-4">Fasal</td>
              <td class="px-6 py-4">Fasal@123</td>
              <td class="px-6 py-4">Master</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
