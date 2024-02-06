import React, { useEffect, useState } from "react";
import "../../App.css";

import { employeeDetailsValidation } from "../../validation/employeeDetails";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate()
  const [photo, setPhoto] = useState("");
  const [photoName, setPhotoName] = useState("");

  const [documentName, setDocumentName] = useState("");
  const [documentFile, setDocumentFile] = useState("");
  const input = document.getElementById("")

  const handlePhotoChange = (event) => {

    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        // FileReader.onload is triggered when the file is read successfully
        setPhoto(reader.result); // Store the image data in state
      };
      // reader.readAsDataURL(file); // Read the contents of the file as a data URL
    }
  };

  const handleDocumentChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      setDocumentName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setDocumentFile(reader.result);
      };
      // reader.readAsDataURL(file); // Read the contents of the file as a data URL
    }
  };

  // console.log(photo,' the photo')
  const onSubmit = () => {
    // console.log('the name is in the console')
    console.log("the console is not working");
    navigate("/userMaster")

  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        mobile: "",
        address: "",
        dailyWage: "",
        photo: "",
        document: "",
      },
      validationSchema: employeeDetailsValidation,
      onSubmit,
    });
  return (
    <form>
      <div class="mb-4">
        <input
          type="text"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          id="name"
          class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
          placeholder="Name"
          // required
        />
        {errors.name && touched.name && (
          <h1 className="text-xs pt-2 text-rose-500 ">{errors.name}</h1>
        )}
      </div>
      <div class="mb-4">
        <input
          type="mobile"
          id="mobile"
          value={values.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
          placeholder="Mobile Number"
          // required
        />
        {errors.mobile && touched.mobile && (
          <h1 className="text-xs pt-2 text-rose-500 ">{errors.mobile}</h1>
        )}
      </div>

      <div class="mb-4">
        <input
          type="text"
          id="dailyWage"
          value={values.dailyWage}
          onBlur={handleBlur}
          onChange={handleChange}
          class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
          placeholder="Daily Wage"
          // required
        />
        {errors.dailyWage && touched.dailyWage && (
          <h1 className="text-xs pt-2 text-rose-500 ">{errors.dailyWage}</h1>
        )}
      </div>

      <div class="mb-4">
        <input
          type="text"
          id="address"
          value={values.address}
          onBlur={handleBlur}
          onChange={handleChange}
          class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
          placeholder="Address"
          // required
        />
        {errors.address && touched.address && (
          <h1 className="text-xs pt-2 text-rose-500 ">{errors.address}</h1>
        )}
      </div>

      {/* the file inptu area */}

      {!photoName && (
        <h1 className="text-xs p-1 text-rose-500 ">{"please fill the form"}</h1>
      )}
      <div className=" grid grid-cols-5 mb-4 border border-6  rounded-lg ">
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="photo"
          accept="image/*"
          type="file"
          onChange={handlePhotoChange}
        />
        <div className="px-3 text-xs col-span-3  grid  items-center ">
          <p className="font-light">
            {photoName ? photoName : "Choose file to Upload"}
          </p>
        </div>
        <div
          className="col-span-2 text-center grid  items-center font-medium rounded-lg text-white bg-[#66BB6C] h-[2rem] cursor-pointer"
          htmlFor="photo"
          onClick={() => document.getElementById("photo").click()}
        >
          <h1 className="">Upload</h1>
        </div>
      </div>

      {!documentName && (
        <h1 className="text-xs p-1  text-rose-500 ">{"plese fill the form"}</h1>
      )}
      <div className=" grid grid-cols-5 mb-4 border border-6  rounded-lg ">
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="document"
          // accept="image/*"
          type="file"
          onChange={handleDocumentChange}
        />
        <div className="px-3 text-xs col-span-3  grid  items-center ">
          <p className="font-light">
            {documentName ? documentName : "Choose file to Upload"}
          </p>
        </div>
        <div
          className="col-span-2 text-center grid  items-center  rounded-lg text-white bg-[#66BB6C] h-[2rem] cursor-pointer"
          htmlFor="file_input"
          onClick={() => document.getElementById("document").click()}
        >
          <h1 className="">Attach File</h1>
          <input id="file_input2" type="file" />
        </div>
      </div>

      <button
        class=" text-white mx-auto grid bg-[#02345D] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center "
        type="button"
        onClick={handleSubmit}
      >
        History
      </button>
    </form>
  );
};

export default Form;
