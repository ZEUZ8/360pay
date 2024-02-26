import React from "react";
import Form from "./Form"

const Page = () => {
  return (
    // <div className="grid grid-rows-12 items-center justify-center h-[100vh]">
    //   <div className="row-span-5 row-start-2">
    //     <img src="/imgs/icon.png" alt="icon" />
    //   </div>
    //   <div className="row-span-7 row-start-7">
    //     <div>
    //       <Form />
    //     </div>
    //   </div>
    // </div>

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
