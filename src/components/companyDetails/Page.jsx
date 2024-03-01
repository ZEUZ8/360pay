import React from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const navigate = useNavigate();
  return (
    <>
      <ToastContainer />
      <div className="grid md:grid-cols-2 h-screen md:justify-center md:items-center ">
        <div className="  grid items-end justify-center pb-5 ">
          <img
            src="/imgs/192x192.png"
            alt="icon"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="mx-12 pb-3">
          <h1 className="text-white pb-2 xl:text-xl xl:font-medium">
            Company Details
          </h1>
          <div className="p-5 bg-white rounded-xl">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
