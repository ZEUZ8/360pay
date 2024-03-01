import React, { useContext, useEffect, useRef, useState } from "react";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosClose } from "react-icons/io";
import { employeeDetailsValidation } from "../../validation/employeeDetails";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppProvider";
import { Select } from "antd";
import {
  FileValidation,
  ImageValidation,
} from "../../validation/fileValidation";
import {
  UploadEmployeeDetails,
  deleteImage,
  uploadImage,
} from "../../Api/services/userServices";
import "./style.css";

const Form = ({ image, setImage }) => {
  const navigate = useNavigate();

  //state for photo storing
  const { photo, setPhoto, name, setUserName, loading, setLoading } =
    useContext(AppContext);
  const [wageTypes, setWageTypes] = useState(["Hourly", "Daily", "Monthly"]);
  const [employeeTypes, setEmployeeTypes] = useState([
    "Permanent",
    "Temporary",
  ]);
  const options = employeeTypes.map(type => ({
    value: type,
    label: type
  }));
  const WageOptions = wageTypes.map(type => ({
    value: type,
    label: type
  }));
  
  const [employeeType, setEmployeeType] = useState("");
  const [wageType, setWageType] = useState("");
  const [wageTypeError, setWageTypeError] = useState(false);
  const [employeeTypeError, setEmployeeTypeError] = useState(false);
  const [overTime, setOverTime] = useState(false);

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
    if (!wageType) {
      setWageTypeError(true);
    }
    if (!employeeType) {
      setEmployeeTypeError(true);
    }
    if (photo && wageType && employeeType) {
      try {
        setLoading(true);
        const data = {
          opMode: "I",
          empId: 0,
          empName: values?.name,
          empMobileNo: values?.mobile,
          empAddress: values?.address,
          empWage: values?.dailyWage,
          employeeType: employeeType ? employeeType : "",
          wageType: wageType ? wageType : "",
          empImageUrl: image?.FileUrl,
          empDocument: documentFile ? documentFile?.FileUrl : "",
          overTime: overTime,
          isActive: true,
        };
        const response = await UploadEmployeeDetails(data);
        if (response?.data?.isSuccess) {
          resetForm();
          setPhoto("");
          setDocumentFile("");
          toast.success("Uploaded", {
            autoClose: 1000,
            onClose: () => navigate("/userMaster"),
          });
        }
      } catch (err) {
        // console.log(err, " error in the onSubmit of the employee Details");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(()=>{
    console.log(employeeType,' teh avleu in teh console')
  },[employeeType])

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

  const handleEmployeeType = async (event) => {
    if (event) {
      setEmployeeTypeError(false);
      setEmployeeType(event);
      if (event === "Permanent") {
        setWageType("Monthly");
        setWageTypeError(false)
      }
    }
  };

  const handleWagetype = async (event) => {
    if (event) {
      setWageTypeError(false);
      setWageType(event);
    }
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
          } bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  outline-blue-300`}
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
          } bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  outline-blue-300`}
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
      {/*  the input that need to update for the  Employee type  */}
      <div
        className={`mb-4 ${
          errors.mobile && touched.mobile && values.mobile.length > 0 && "mb-2"
        }`}
      >
        <div className="col-span-4  rounded-lg">
          {/* <select
            id="employeeType"
            value={employeeType}
            onChange={handleEmployeeType}
            // onBlur={handleBlur}
            className={` custom-dropdown bg-gray-100 ${
              employeeType ? "text-black" : "text-gray-400"
            } text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 outline-none `}
          >
            <option value="" className="text-pink-200" hidden>
              Employee Types
            </option>
            {employeeTypes.map((role, i) => (
              <option value={role} key={i} className="text-black">
                {role}
              </option>
            ))}
          </select> */}
          <Select
            className="w-full h-[2.5rem]"
            placeholder="Employee Type"
            variant="filled"
            value={options.find(option => option.value === employeeType)}
            onChange={handleEmployeeType}
            style={{ flex: 1 }}
            options={options}
          />
        </div>
        {employeeTypeError && (
          <h1 className="text-xs px-3 animate-pulse pt-1 text-rose-500 ">
            Required
          </h1>
        )}
      </div>

      <div
        className={`mb-4 ${
          errors.dailyWage &&
          touched.dailyWage &&
          values.dailyWage.length > 0 &&
          "mb-2"
        } grid grid-cols-12 gap-3`}
      >
           <div className=" col-span-6 rounded-lg">
          {/* <select
            id="wageType"
            value={wageType}
            onChange={handleWagetype}
            // onBlur={handleBlur}
            disabled={employeeType === "Permanent"}
            className={` bg-gray-100 text-xs ${
              wageType ? "text-black" : "text-gray-400 "
            } placeholder:font-extralight rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5   outline-blue-300`}
          >
            <option value="" className="text-gray-300" hidden>
              Wage Type
            </option>
            {wageTypes.map((wage, i) => (
              <option value={wage} key={i}>
                {wage}
              </option>
            ))}
          </select> */}
          <Select
            className="w-full h-[2.5rem]"
            placeholder="Wage Type"
            variant="filled"
            value={WageOptions.find(option => option.value === wageType)}
            onChange={handleWagetype}
            style={{ flex: 1 }}
            options={WageOptions}
            disabled={employeeType === "Permanent"}
          />
          {wageTypeError && (
            <h1 className="text-xs px-3 animate-pulse pt-1 text-rose-500 ">
              Required
            </h1>
          )}
        </div>

        <div className="col-span-6 ">
          <input
            type="text"
            id="dailyWage"
            value={values.dailyWage}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`${
              errors.dailyWage &&
              touched.dailyWage &&
              `placeholder:text-red-500`
            } bg-gray-100  text-gray-400 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  outline-blue-300`}
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
          } bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  outline-blue-300`}
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
      <div className="mb-4">
        <h1 className="px-3 pb-2 text-[12px] underline underline-offset-2">Over Time</h1>
        <div className="flex justify-start align-middle items-center gap-4  px-4">
          <div className="flex items-center">
            <input
              id="ovetTime"
              type="radio"
              value={true}
              checked={overTime === true}
              onChange={() => setOverTime(true)}
              name="default-radio"
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 outline-blue-300"
            />
            <label
            onClick={()=>setOverTime(true)}
              htmlFor="default-radio-1"
              className="ms-1 text-xs font-medium text-gray-600 dark:text-gray-400"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked={overTime === false}
              onChange={() => setOverTime(false)}
              id="overTime"
              type="radio"
              value={false}
              name="default-radio"
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white rounded-full  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 outline-blue-300"
            />
            <label
            onClick={()=>setOverTime(false)}
              htmlFor="default-radio-2"
              className="ms-1 text-xs font-medium text-gray-600 dark:text-gray-400"
            >
              No
            </label>
          </div>
        </div>
      </div>

      {/* image uploading section */}
      <div className=" grid grid-cols-5 mb-3 border border-6  rounded-lg  relative">
        <p className="absolute top-[-8px] bg-white rounded-full px-3 font-light text-gray-500 left-2 text-xs p-0 m-0 ">
          Photo
        </p>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer
               bg-gray-50  dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-blue-300"
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
              !photo || photoError
                ? "text-rose-400 animate-bounce"
                : `text-gray-500`
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
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-blue-300"
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
          focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center justify-center"
          type="button"
          onClick={handleHistory}
        >
          History
        </button>
        <button
          className="blue_Linear_gradient col-span-3 text-white  grid  focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center justify-center"
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
