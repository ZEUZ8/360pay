import React from "react";
import "../../App.css";
const Form = () => {
  return (
    <div>
      <div class="mb-4">
        <input
          type="text"
          id="name"
          class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
          placeholder="Name"
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
          id="dailyWage"
          class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
          placeholder="Daily Wage"
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

      {/* the file inptu area */}
      <div className="mb-4">
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
      </div>

      <div className=" grid grid-cols-5 mb-4 border border-6  rounded-lg">
        <div className="px-3 text-xs col-span-3  grid  items-center ">
          <p className="font-light">Choose file to Upload</p>
        </div>
        <div className="col-span-2 text-center grid  items-center font-medium rounded-lg text-white bg-[#66BB6C] h-[2rem] cursor-pointer" htmlFor="file_input">
          <h1 className="">Upload</h1>
          <input id="file_input" type="file" />
        </div>
      </div>
      
      <div className=" grid grid-cols-5 mb-4 border border-6  rounded-lg">
        <div className="px-3 text-xs col-span-3  grid  items-center ">
          <p className="font-light">Choose file to Upload</p>
        </div>
        <div className="col-span-2 text-center grid  items-center  rounded-lg text-white bg-[#66BB6C] h-[2rem] cursor-pointer" htmlFor="file_input">
          <h1 className="">Attach File</h1>
          <input id="file_input" type="file" />
        </div>
      </div>

      <button class=" text-white mx-auto grid bg-[#02345D] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ">
        History
      </button>

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
