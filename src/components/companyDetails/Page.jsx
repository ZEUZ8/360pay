import React from "react";
import Form from "./Form";

const Page = () => {
  return (

    <div className="grid max-md:grid-rows-12 md:grid-cols-2 h-[100vh] md:justify-center md:items-center ">
      <div className="max-md:row-start-2   max-md:row-span-3 grid items-end justify-center pb-5 ">
      <img src="/imgs/256x256.png" alt="icon" onClick={()=>navigate("/")}/>
      </div>
      <div className="max-md:row-start-6 max-md:row-span-6 mx-12 pb-3">
        <h1 className="text-white pb-2 xl:text-xl xl:font-medium">Company Details</h1>
        <div className="p-5 bg-white rounded-xl">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Page;
