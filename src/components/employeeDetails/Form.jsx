import React, { useEffect, useState } from "react";
import "../../App.css";
import { IoIosClose } from "react-icons/io";

import { employeeDetailsValidation } from "../../validation/employeeDetails";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  //state for photo storing
  const [photo, setPhoto] = useState([]);
  const [photoName, setPhotoName] = useState("");
  console.log(photo, " the poto stored in teh console");

  //state for the file storing
  const [documentFile, setDocumentFile] = useState([]);
  const [documentName, setDocumentName] = useState("");

  const handlePhotoChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        // FileReader.onload is triggered when the file is read successfully
        setPhoto((prev) => {
          return [...prev, reader.result];
        }); // Store the image data in state
      };
      reader.readAsDataURL(file); // Read the contents of the file as a data URL
    }
  };

  //functionality for remoing the image when clicking the cros icon on the image
  const removeImage = (image, ic) => {
    setPhoto((prev) => {
      return prev.filter((img) => img !== image);
    });
  };

  const handleDocumentChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      setDocumentName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setDocumentFile((prev) => {
          return [...prev, reader.result];
        });
      };
      reader.readAsDataURL(file); // Read the contents of the file as a data URL
    }
  };

  const removeFile = (document, ic) => {
    setDocumentFile((prev) => {
      return prev.filter((file) => file !== document);
    });
  };

  // console.log(photo,' the photo')
  const onSubmit = () => {
    // console.log('the name is in the console')
    console.log("the console is not working");
    navigate("/userMaster");
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
      <div class="mb-4 ">
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

      {photo.length > 0 && (
        <div className="flex pb-3 overflow-x-auto">
          <div className="flex overflow-auto">
            {photo.map((photo, i) => (
              <div className="relative " key={i}>
                <IoIosClose
                  className="absolute top-1 mr-1 right-2 bg-white rounded-full shadow-lg hover:text-rose-600"
                  onClick={() => removeImage(photo, i)}
                />
                <img
                  src={photo}
                  alt="Uploded image"
                  className="h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] rounded-xl px-2"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <>
        <div className=" grid grid-cols-5 mb-3 border border-6  rounded-lg  relative">
          <p className="absolute top-[-8px] bg-white px-3 font-light text-gray-500 left-2 text-xs p-0 m-0 ">
            Photo
          </p>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer
               bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="photo"
            accept="image/*"
            type="file"
            onChange={handlePhotoChange}
          />
          <div className=" text-xs col-span-3  grid  items-center p-3">
            <p
              className={`font-light ${
                photo.length > 0 ? `text-gray-400` : `text-pink-300`
              } `}
            >
              Choose file to Upload
            </p>
          </div>
          <div
            className="col-span-2 text-center grid  items-center font-medium rounded-lg  text-white bg-[#66BB6C] h-full cursor-pointer"
            htmlFor="photo"
            onClick={() => document.getElementById("photo").click()}
          >
            <h1 className="">Upload</h1>
          </div>
        </div>
      </>

      {documentFile.length > 0 && (
        <div className="flex  w-full pb-3   max-w-full overflow-x-auto">
          {documentFile.map((file, i) => (
            <div className="relative">
              <IoIosClose
                className="absolute top-1 mr-1 right-2 bg-white rounded-full shadow-lg hover:text-rose-600"
                onClick={() => removeFile(file, i)}
              />
              <img
                src={file}
                alt="Uploded image"
                className="h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] rounded-xl px-2"
              />
            </div>
          ))}
        </div>
      )}

      <div className=" grid grid-cols-5 mb-3 border border-6  rounded-lg relative">
        <p className="absolute top-[-8px] bg-white px-3 font-light text-gray-500 left-2 text-xs p-0 m-0 ">
          Document
        </p>
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="document"
          // accept="image/*"
          type="file"
          onChange={handleDocumentChange}
        />
        <div
          className={`p-3 text-xs col-span-3  grid  items-center ${
            documentFile.length > 0 ? "text-gray-400" : "text-pink-300"
          }`}
        >
          <p className="font-light">Choose file to Upload</p>
        </div>
        <div
          className="col-span-2 text-center grid  items-center  rounded-lg text-white bg-[#66BB6C] h-full cursor-pointer"
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
