import React from "react";

const Form = () => {
  return (
    <div>
        <div class="mb-4">
          <input
            type="text"
            id="siteName"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
            placeholder="Site Name"
            required
          />
        </div>
        <div class="mb-4">
          <input
            type="number"
            id="targetWage"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
            placeholder="Target Wage"
            required
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            id="location"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
            placeholder="Location"
            required
          />
        </div>
        <div class="mb-5">
          <input
            type="mobile"
            id="mobile"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
            placeholder="Mobile Number"
            required
          />
        </div>
        {/* <div class="mb-4">
          <input
            type="text"
            id="Owner"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
            placeholder="Owner Name"
            required
          />
        </div> */}
       

        <button
          class=" text-white mx-auto grid bg-[#02345D] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center "
        >
          History
        </button>
    </div>
  );
};

export default Form;
