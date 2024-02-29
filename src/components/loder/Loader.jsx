import React from "react";
import "./loader.css"
const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 text-white flex items-center justify-center bg-gray-900 bg-opacity-70   z-50">
      {/* <div className="md:w-[50%] w-full"> */}
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Loader;
