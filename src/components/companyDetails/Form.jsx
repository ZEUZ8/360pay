import React from "react";
import { companyDetailsValidation } from "../../validation/companyDetails";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "../.././App.css"

const Form = () => {
  const navigate = useNavigate()
  const onSubmit = (values) => {
    navigate("/siteDetails")
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange ,resetForm} =
    useFormik({
      initialValues: {
        clientId: "",
        name: "",
        address: "",
        mobile: "",
        ownerName: "",
      },
      validationSchema: companyDetailsValidation,
      onSubmit,
    });
  return (
    <form className="overflow-auto">
      <div className="mb-4">
        <input
          type="text"
          value={values.clientId}
          onBlur={handleBlur}
          onChange={handleChange}
          id="clientId"
          className={`${errors.clientId && touched.clientId && `placeholder:text-red-500`} bg-gray-100 cursor-pointer text-gray-500 text-xs rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          placeholder={errors.clientId && touched.clientId ? `Client Id  ${errors.clientId}` : "Client ID"}
        />
        {errors.clientId && touched.clientId && values.clientId.length>0 &&(
            <h1 className="text-xs  text-rose-500 animate-bounce px-2">{errors.clientId}</h1>
          )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${errors.name && touched.name && `placeholder:text-red-500`}  bg-gray-100 cursor-pointer text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    `}
          placeholder={errors.name && touched.name ? `Name  ${errors.name}` : "Name"}
        />
        {errors.name && touched.name && values.name.length>0&&(
            <h1 className="text-xs pt-2 text-rose-500 animate-bounce px-2">{errors.name}</h1>
          )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="address"
          value={values.address}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${errors.address && touched.address && `placeholder:text-red-500`} bg-gray-100 cursor-pointer text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    `}
          placeholder={errors.address && touched.address ? `Address  ${errors.address}`: "Address"}
        />
        {errors.address && touched.address && values.address.length > 0 &&(
            <h1 className="text-xs pt-2 text-rose-500 animate-bounce px-2">{errors.address}</h1>
          )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="mobile"
          value={values.mobile}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${errors.mobile && touched.mobile && `placeholder:text-red-500`}  bg-gray-100 cursor-pointer text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5    `}
          placeholder={errors.mobile && touched.mobile ? `Mobile  ${errors.mobile}` : "Mobile"}
        />
        {errors.mobile && touched.mobile && values.mobile &&(
            <h1 className="text-xs pt-2 text-rose-500 animate-bounce px-2">{errors.mobile}</h1>
          )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="ownerName"
          value={values.ownerName}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${errors.ownerName && touched.ownerName && `placeholder:text-red-500`}  bg-gray-100 cursor-pointer text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5   `}
          placeholder={errors.ownerName && touched.ownerName ? `Owner Name  ${errors.ownerName}` : "Owner Name"}
        />
        {errors.ownerName && touched.ownerName && values.ownerName.length>0 &&(
            <h1 className="text-xs pt-2 text-rose-500 animate-bounce">{errors.ownerName}</h1>
          )}
      </div>
      <button
      type="button"
        onClick={handleSubmit}
        className=" text-white mx-auto grid bg-[#02345D] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center "
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
