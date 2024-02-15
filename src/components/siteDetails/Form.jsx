import React from "react";
import { siteDetailsValidation } from "../../validation/siteDetails";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate()
  const onSubmit = (values) => {
    console.log(values,"submitted in the console");
    navigate("/employeeDetails")
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        siteName: "",
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
          <h1 className="text-xs  text-rose-500 animate-bounce px-2">{errors.siteName}</h1>
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
        {errors.targetWage &&
          touched.targetWage &&
          values.targetWage && (
            <h1 className="text-xs  text-rose-500 animate-bounce px-2">{errors.targetWage}</h1>
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
          <h1 className="text-xs  text-red-500 animate-bounce px-2">{errors.location}</h1>
        )}
      </div>
      <div className="mb-5">
        <input
          type="mobile"
          id="mobile"
          value={values.mobile}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${
            errors.mobile && touched.mobile && `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          placeholder={
            errors.mobile && touched.mobile
              ? `Mobile  ${errors.mobile}`
              : "Mobile"
          }
        />
        {errors.mobile && touched.mobile && values.mobile.length > 0 && (
          <h1 className="text-xs  text-rose-500 animate-bounce px-2">{errors.mobile}</h1>
        )}
      </div>
      {/* <div className="mb-4">
          <input
            type="text"
            id="Owner"
            className="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    "
            placeholder="Owner Name"
            required
          />
        </div> */}

      <button 
      type="button"
      onClick={handleSubmit}
      className=" text-white mx-auto grid bg-[#02345D] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ">
        History
      </button>
    </div>
  );
};

export default Form;
