import React, { useEffect, useState } from "react";
import { siteDetailsValidation } from "../../validation/siteDetails";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { uploadSiteDetails } from "../../Api/services/userServices";

const Form = ({ setDuplicateError }) => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values, "submitted in the console");
    // navigate("/employeeDetails")
    try {
      const data = {
        opMode: "I",
        siteId: 0,
        siteName: "site 1",
        siteTarget: 60000,
        siteLocation: "calicut",
        siteMobileNo: "9744070172",
        isActive: true,
      };
      const response = await uploadSiteDetails(data);
      if (response) {
        if (response.data.isSuccess) {
          setDuplicateError(false);
        } else {
          setDuplicateError(true);
        }
      }
    } catch (error) {
      console.log(error, " error in siteuploading in site Dtails");
    }
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
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

  return (
    <div>
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
          type="number"
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
              ? `Target Wage  ${errors.ownerName}`
              : "Target Wage"
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
              ? `Owner Name  ${errors.location}`
              : "Owner Name"
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
      <button
        type="button"
        onClick={handleSubmit}
        className=" text-white mx-auto grid bg-[#02345D] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center "
      >
        History
      </button>
    </div>
  );
};

export default Form;
