import React, { useContext, useEffect, useRef, useState } from "react";
import "../../App.css";
import { IoIosClose } from "react-icons/io";

import { employeeDetailsValidation } from "../../validation/employeeDetails";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppProvider";
import {
  FileValidation,
  ImageValidation,
} from "../../validation/fileValidation";

const Form = ({ image, setImage }) => {
  const navigate = useNavigate();

  //state for photo storing
  const { photo, setPhoto, name, setUserName } = useContext(AppContext);

  const [photoName, setPhotoName] = useState("");
  const [photoError, setPhotoError] = useState("");

  //state for the file storing
  const [documentFile, setDocumentFile] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [fileError, setFileError] = useState("");
  const [format, setFormat] = useState("");

  const fileInputRef = useRef(null);

  const handlePhotoChange = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.value, " the event value");
    const file = event.target.files[0];
    const error = ImageValidation(file);
    if (error) {
      setPhotoError(error);
    } else {
      setPhotoError('')
      if (file) {
        setPhotoName(file.name);
        const reader = new FileReader();
        reader.onload = () => {
          // FileReader.onload is triggered when the file is read successfully
          setPhoto(reader.result); // Store the image data in state
          setImage(reader.result);
        };
        reader.readAsDataURL(file); // Read the contents of the file as a data URL
      }
    }
  };

  const handleDocumentChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const error = FileValidation(file);
    if (error) {
      setFileError(error);
    } else {
      setFileError("");
      if (file) {
        setDocumentName(file.name);
        const reader = new FileReader();
        reader.onload = () => {
          setDocumentFile(reader.result);
        };
        reader.readAsDataURL(file); // Read the contents of the file as a data URL
      }
    }
  };

  useEffect(() => {
    // console.log(photo,'the photo', values.photo,' the photo')
  }, [photo]);

  // useEffect(() => {
  //   console.log(documentFile, " the file in theconse");
  // }, [documentFile]);

  // console.log(photo,' the photo')
  const onSubmit = () => {
    // console.log('the name is in the console')
    if (photo && documentFile) {
      navigate("/userMaster");
    }
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        name: name ? name : "",
        mobile: "",
        address: "",
        dailyWage: "",
        photo: "",
        document: "",
      },
      validationSchema: employeeDetailsValidation,
      onSubmit,
    });

  useEffect(() => {
    setUserName(values.name);
  }, [values.name]);

  const clearFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the value of file input
    }
  };

  return (
    <form>
      <div
        className={`mb-4 ${
          errors.name && touched.name && values.name.length > 0 && "mb-2"
        }`}
      >
        <input
          type="text"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          id="name"
          className={`${
            errors.name && touched.name && `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          placeholder={
            errors.name && touched.name ? `Name ${errors.name}` : "Name"
          }
        />
        {errors.name && touched.name && values.name.length > 0 && (
          <h1 className="text-xs  text-rose-500 animate-pulse px-2">
            {errors.name}
          </h1>
        )}
      </div>
      <div
        className={`mb-4 ${
          errors.mobile && touched.mobile && values.mobile.length > 0 && "mb-2"
        }`}
      >
        <input
          type="mobile"
          id="mobile"
          value={values.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.mobile && touched.mobile && `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          placeholder={
            errors.mobile && touched.mobile
              ? `Mobile Number ${errors.mobile}`
              : "Mobile Number"
          }
          // required
        />
        {errors.mobile && touched.mobile && values.mobile.length > 0 && (
          <h1 className="text-xs  text-rose-500 animate-pulse px-2">
            {errors.mobile}
          </h1>
        )}
      </div>

      <div
        className={`mb-4 ${
          errors.dailyWage &&
          touched.dailyWage &&
          values.dailyWage.length > 0 &&
          "mb-2"
        }`}
      >
        <input
          type="text"
          id="dailyWage"
          value={values.dailyWage}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${
            errors.dailyWage && touched.dailyWage && `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          placeholder={
            errors.dailyWage && touched.dailyWage
              ? `Daily Wage ${errors.dailyWage}`
              : "Daily Wage"
          }
        />
        {errors.dailyWage &&
          touched.dailyWage &&
          values.dailyWage.length > 0 && (
            <h1 className="text-xs  text-rose-500 animate-pulse px-2">
              {errors.dailyWage}
            </h1>
          )}
      </div>

      <div
        className={`mb-4 ${
          errors.address &&
          touched.address &&
          values.address.length > 0 &&
          "mb-2"
        }`}
      >
        <input
          type="text"
          id="address"
          value={values.address}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${
            errors.address && touched.address && `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          placeholder={
            errors.address && touched.address
              ? `Address ${errors.address}`
              : "Address"
          }
        />
        {errors.address && touched.address && values.address.length > 0 && (
          <h1 className="text-xs  text-rose-500 animate-pulse px-2">
            {errors.address}
          </h1>
        )}
      </div>

          {/* image uploading section */}
      <div className=" grid grid-cols-5 mb-3 border border-6  rounded-lg  relative">
        <p className="absolute top-[-8px] bg-white rounded-full px-3 font-light text-gray-500 left-2 text-xs p-0 m-0 ">
          Photo
        </p>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer
               bg-gray-50  dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="photo"
          accept="image/*"
          type="file"
          ref={fileInputRef}
          onChange={(event) => {
            handlePhotoChange(event);
            clearFileInput();
          }}
        />
        <div className=" text-xs col-span-3  grid  items-center p-3">
          <p
            className={`font-light ${
              !photo || photoError ? "text-rose-400" : `text-gray-500`
            } `}
          >
            {photoError.length > 0 ? photoError : photo ? photoName :  "Choose photo to Upload"}
          </p>
        </div>
        <div
          className="col-span-2 text-center grid  items-center rounded-lg   bg-[#66BB6C] h-full cursor-pointer active:animate-bounce"
          htmlFor="photo"
          onClick={() => {
            document.getElementById("photo").click(() => console.log("name"));
          }}
        >
          <h1 className=" font-medium text-white hover:animate-pulse">
            Upload
          </h1>
        </div>
      </div>

      {/* file uplading section  */}
      <div className=" grid grid-cols-5 mb-3 border border-6  rounded-lg relative">
        <p className="absolute top-[-8px] bg-white rounded-full px-3 font-light text-gray-500 left-2 text-xs p-0 m-0 ">
          Document
        </p>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="document"
          accept=".pdf"
          type="file"
          ref={fileInputRef}
          onChange={(event)=>{
            handleDocumentChange(event);
            clearFileInput();
          }}
        />
        <div
          className={`p-3 text-xs col-span-3  grid  items-center ${
            !documentFile || fileError ? "text-rose-400" : "text-gray-500"
          }`}
        >
          {fileError.length > 0 ? (
            <p className="font-light">{fileError}</p>
          ) : documentFile ? (
            <p className="font-ligh">{documentName}</p>
          ) : (
            <p className="font-light">Choose file to Upload</p>
          )}
        </div>
        <div
          className="col-span-2 text-center grid  items-center  rounded-lg  bg-[#66BB6C] active:animate-bounce h-full cursor-pointer"
          htmlFor="file_input"
          onClick={() => document.getElementById("document").click()}
        >
          <h1 className="text-white hover:animate-pulse">Attach File</h1>
          <input id="file_input2" type="file" />
        </div>
      </div>

      <button
        className=" text-white mx-auto grid bg-[#02345D] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center "
        type="button"
        onClick={handleSubmit}
      >
        History
      </button>
    </form>
  );
};

export default Form;
