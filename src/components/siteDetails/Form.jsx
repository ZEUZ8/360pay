import React, { useContext, useEffect, useState } from "react";
import { siteDetailsValidation } from "../../validation/siteDetails";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { uploadSiteDetails } from "../../Api/services/userServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../../Context/AppProvider";

const Form = ({ setDuplicateError }) => {
  const navigate = useNavigate();
  const {loading,setLoading} = useContext(AppContext)

  const onSubmit = async (values) => {
    // navigate("/employeeDetails")
    try {
      setLoading(true)
      values.isActive = true;
      values.opMode = "I";
      const response = await uploadSiteDetails(values);
      if (response) {
        if (response?.data?.isSuccess) {

          setDuplicateError(false);
          resetForm();
          toast.success("successfully uploaded", {
            autoClose: 1500,
            onClose: () => navigate("/employeeDetails"),
          });
          // navigate("/employeeDetails");
        } else if (
          response.response.data.message.includes(
            "Violation of UNIQUE KEY constraint"
          )
        ) {
          setDuplicateError(true);
          toast.error("Site Already exists",{
            autoClose:2000
          });
        }
      }
    }catch (error) {
      // console.log(error, " error in siteuploading in site Dtails");
    }finally{
      setLoading(false)
    }
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: {
      siteName: "",
      ownerName: "",
      targetWage: "",
      location: "",
      mobile: "",
    },
    validationSchema: siteDetailsValidation,
    onSubmit,
  });

  const handleHistory = () => {
    console.log("user clicked the History buton");
  };

  return (
    <div>
      <ToastContainer />
      <div className="mb-4">
        <input
          type="text"
          id="siteName"
          value={values.siteName}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${
            errors.siteName && touched.siteName && `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          placeholder={
            errors.siteName && touched.siteName
              ? `Site Name  ${errors.siteName}`
              : "Site Name"
          }
        />
        {errors.siteName && touched.siteName && values.siteName.length > 0 && (
          <h1 className="text-xs  text-rose-500 animate-bounce px-2">
            {errors.siteName}
          </h1>
        )}
      </div>
      <div className="mb-4">
        <input
          type="string"
          id="targetWage"
          value={values.targetWage}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${
            errors.targetWage &&
            touched.targetWage &&
            `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          placeholder={
            errors.targetWage && touched.targetWage
              ? `Target Wage  ${errors.targetWage}`
              : "Target Wage"
          }
        />
        {errors.targetWage && touched.targetWage && values.targetWage && (
          <h1 className="text-xs  text-rose-500 animate-bounce px-2">
            {errors.targetWage}
          </h1>
        )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="ownerName"
          value={values.ownerName}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${
            errors.ownerName && touched.ownerName && `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          placeholder={
            errors.ownerName && touched.ownerName
              ? `Owner Name  ${errors.ownerName}`
              : "Owner Name"
          }
        />
        {errors.ownerName && touched.ownerName && values.ownerName && (
          <h1 className="text-xs  text-rose-500 animate-bounce px-2">
            {errors.ownerName}
          </h1>
        )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="location"
          value={values.location}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${
            errors.location && touched.location && `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          placeholder={
            errors.location && touched.location
              ? `Location  ${errors.location}`
              : "Location"
          }
        />
        {errors.location && touched.location && values.location.length > 0 && (
          <h1 className="text-xs  text-red-500 animate-bounce px-2">
            {errors.location}
          </h1>
        )}
      </div>
      <div className="mb-5">
        <input
          type="text"
          id="mobile"
          value={values.mobile}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${
            errors.mobile && touched.mobile && `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          placeholder={
            errors.mobile && touched.mobile
              ? `Contact Number  ${errors.mobile}`
              : "Contact Number"
          }
        />
        {errors.mobile && touched.mobile && values.mobile.length > 0 && (
          <h1 className="text-xs  text-rose-500 animate-bounce px-2">
            {errors.mobile}
          </h1>
        )}
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
    </div>
  );
};

export default Form;
