import React from "react";

const Form = () => {
  return (
    <div>
      <div class="mb-4">
        <input
          type="text"
          id="userName"
          class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
          placeholder="User Name"
          required
        />
      </div>
      <div class="mb-4">
        <input
          type="password"
          id="targetWage"
          class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
          placeholder="Password"
          required
        />
      </div>
      <div class="mb-4">
        <select
          type="text"
          id="location"
          class="bg-gray-100   text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
          placeholder="Location"
          required
        >
          <option value="privilage">Privilage</option>
          <option value="na">na</option>
          <option value="nam">nam</option>
          <option value="name">name</option>
        </select>
      </div>

      <button class=" text-white mx-auto grid bg-[#02345D] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ">
        Create
      </button>

     
    </div>
    
  );
};

export default Form;
