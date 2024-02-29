import React, { useContext, useEffect, useRef, useState } from "react";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosClose } from "react-icons/io";
import { employeeDetailsValidation } from "../../validation/employeeDetails";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppProvider";
import {
  FileValidation,
  ImageValidation,
} from "../../validation/fileValidation";
import {
  UploadEmployeeDetails,
  deleteImage,
  uploadImage,
} from "../../Api/services/userServices";

const Form = ({ image, setImage }) => {
  const navigate = useNavigate();

  //state for photo storing
  const { photo, setPhoto, name, setUserName, loading, setLoading } =useContext(AppContext);
  const [wageTypes,setWageTypes] = useState(["Hourly","Weekly","Daily","Monthly"])

  const [photoName, setPhotoName] = useState("");
  const [photoError, setPhotoError] = useState("");

  //state for the file storing
  const [documentFile, setDocumentFile] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [fileError, setFileError] = useState("");

  const fileInputRef = useRef(null);
  const photoInputRef = useRef(null);

  const handlePhotoChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const error = ImageValidation(file);
    if (error) {
      setPhotoError(error);
    } else {
      setPhotoError("");
      if (file) {
        setLoading(true);
        setLoading(true);
        setPhotoName(file);
        if (photo) {
          (async function () {
            await deleteImage(photo);
          })();
        }
        const response = await uploadImage(file);
        if (response?.data?.ImageUploadStatus && response?.status === 200) {
          setPhoto(response?.data?.FileDetails[0].Filename);
          setImage(response?.data?.FileDetails[0]);
          setLoading(false);
        } else {
          toast.error("Something went wrong");
        }
        setLoading(false);
      }
    }
  };

  // Function for handling the Document/File updation OnChange
  const handleDocumentChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const error = FileValidation(file);
    if (error) {
      setFileError(error);
    } else {
      setFileError("");
      if (file) {
        setLoading(true);
        setDocumentName(file);
        if (documentFile) {
          (async () => {
            await deleteImage(documentFile.Filename);
          })();
        }
        const response = await uploadImage(file);
        if (response?.data?.ImageUploadStatus && response.status === 200) {
          setDocumentFile(response.data.FileDetails[0]);
        }
        setLoading(false);
      }
    }
  };

  const onSubmit = async () => {
    if (photo) {
      try {
        setLoading(true);
        const data = {
          opMode: "I",
          empId: 0,
          empName: values?.name,
          empMobileNo: values?.mobile,
          empAddress: values?.address,
          empWage: values?.dailyWage,
          empImageUrl: image?.FileUrl,
          empDocument: documentFile ? documentFile?.FileUrl : "",
          isActive: true,
        };
        const response = await UploadEmployeeDetails(data);
        if (response?.data?.isSuccess) {
          resetForm();
          setPhoto("");
          setDocumentFile("");
          navigate("/userMaster");
        }
      } catch (err) {
        // console.log(err, " error in the onSubmit of the employee Details");
      } finally {
        setLoading(false);
      }
    }
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik({
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
    setUserName(values?.name);
  }, [values.name]);

  const clearFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the value of file input
    }
  };

  const clearPhotoInput = () => {
    if (photoInputRef.current) {
      photoInputRef.current.value = ""; // Reset the value of photo input
    }
  };

  const handleHistory = () => {
    console.log("user clicked the history button");
  };

  return (
    <form>
      <ToastContainer />
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

     <div className={`mb-2 ${errors.dailyWage && touched.dailyWage && values.dailyWage.length > 0 && "mb-2" } grid grid-cols-12 gap-3`}>
     
      <div className="col-span-8">
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
              ? `Wage ${errors.dailyWage}`
              : "Wage"
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
      <div className="col-span-4 bg-pink-50 rounded-lg">
      <select
          id="wageType"
          // value={values.authorization}
          onChange={handleChange}
          onBlur={handleBlur}
          className={` bg-gray-100 text-xs  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  `}
        >
          <option value="" >
            Type Of Wage
          </option>
          {wageTypes.map((wage) => (
            <option value={wage} key={wage} className="">
              {wage}
            </option>
          ))}
        </select>
        {errors.dailyWage && touched.dailyWage && (
          <h1 className="text-xs px-3 animate-pulse pt-1 text-rose-500 ">
            {/* {errors.authorization} */}
          </h1>
        )}
      </div>
     </div>
      <div className="flex justify-start align-middle items-center gap-4 mb-2 px-3">
        <div class="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-1"
            class="ms-1 text-xs font-medium text-gray-600 dark:text-gray-400"
          >
            Overdue
          </label>
        </div>
        <div class="flex items-center">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white rounded-full  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-2"
            class="ms-1 text-xs font-medium text-gray-600 dark:text-gray-400"
          >
            Not Overdue
          </label>
        </div>
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
          ref={photoInputRef}
          onChange={(event) => {
            handlePhotoChange(event);
            clearPhotoInput();
          }}
        />
        <div className=" text-xs col-span-3  grid  items-center p-3">
          <p
            className={`font-light ${
              !photo || photoError ? "text-rose-400" : `text-gray-500`
            } `}
          >
            {photoError.length > 0
              ? photoError
              : photo
              ? photoName?.name
              : "Choose photo to Upload"}
          </p>
        </div>
        <div
          className="col-span-2 text-center grid  items-center rounded-lg   bg-[#66BB6C] h-full cursor-pointer active:animate-bounce"
          htmlFor="photo"
          onClick={() => {
            document.getElementById("photo").click();
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
          onChange={(event) => {
            handleDocumentChange(event);
            clearFileInput();
          }}
        />
        <div
          className={`p-3 text-xs col-span-3  grid  items-center ${
            fileError ? "text-rose-400" : "text-gray-500"
          }`}
        >
          {fileError.length > 0 ? (
            <p className="font-light">{fileError}</p>
          ) : documentFile ? (
            <p className="font-ligh">{documentName.name}</p>
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

      <div className="grid grid-cols-10 gap-5 ">
        <button
          className="green_Linear_gradient col-span-3 col-start-3 w-full text-white  grid  bg-[#02345D] focus:ring-2 
          focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center "
          type="button"
          onClick={handleHistory}
        >
          History
        </button>
        <button
          className="blue_Linear_gradient col-span-3 text-white  grid  focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center "
          type="button"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
