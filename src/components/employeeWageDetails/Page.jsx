import React from "react";
import WageDetails from "./WageDetails";
// import { chevronDown } from "@heroicons/react/outline";

const Page = () => {
  return (
    <>
      <div className="grid grid-rows-10 h-[100vh]">
        <div className=" grid row-span-5">
          <div className="grid justify-center items-center ">
            <div className="grid justify-center items-center gap-6 ">
              <div>
                <h1 className="text-xs font-medium text-[#02345D] pb-3">
                  Employee Wage Detail
                </h1>
                <div className="relative flex items-center">
                  <input
                    type="search"
                    // id="search-dropdown"
                    placeholder="Choose Employee"
                    autoComplete="off"
                    class="p-3 px-5 w-full  text-sm placeholder-gray-400  text-black bg-gray-200 rounded-md border-none "
                  />
                      {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute mr-3 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg> */}
                </div>
              </div>
              <img
                className="w-40 h-40 bg-red-100 rounded-full mx-auto"
                src="/imgs/person.png"
                alt=""
              />
              <h1 className="text-center">Name</h1>
            </div>
          </div>
        </div>
        <div className="bg-pink-300 row-span-5">s</div>
      </div>
    </>
  );
};

export default Page;
