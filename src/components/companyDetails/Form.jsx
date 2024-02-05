import React from "react";

const Form = () => {
  return (
    <div>
        <div class="mb-4">
          <input
            type="text"
            id="Client ID"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
            placeholder="Client ID"
            required
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            id="Name"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
            placeholder="Name"
            required
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            id="Address"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
            placeholder="Address"
            required
          />
        </div>
        <div class="mb-4">
          <input
            type="number"
            id="Mobile"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
            placeholder="Mobile Number"
            required
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            id="Owner"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
            placeholder="Owner Name"
            required
          />
        </div>
       

        {/* <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border  rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            class="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div> */}
        {/* <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button> */}
    </div>
  );
};

export default Form;
