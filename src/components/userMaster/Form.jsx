import React, { useState } from "react";
import { useFormik } from "formik";
import { userMasterValidation } from "../../validation/userMaster";
const Form = ({ handleUser }) => {
  const [roles, setRoles] = useState(["admin", "worker", "user"]);

  const onSubmit = async(values) => {
    handleUser(values)
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        userName: "",
        password: "",
        privilage: "",
      },
        validationSchema: userMasterValidation,
      onSubmit,
    });

  return (
    <div>
      <form action="">
        <div class="mb-4">
          <input
            type="text"
            id="userName"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="User Name"
          />
         {errors.userName && touched.userName && (
            <h1 className="text-xs pt-2 text-rose-500 ">{errors.userName}</h1>
          )}
        </div>
        <div class="mb-4">
          <input
            type="text"
            id="password"
            class="bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
          />
          {errors.password && touched.password && (
            <h1 className="text-xs pt-2 text-rose-500 ">{errors.password}</h1>
          )}
        </div>
        <div class="mb-4">
          <select
            id="privilage" 
            value={values.privilage} 
            onChange={handleChange} 
            onBlur={handleBlur}
            class="bg-gray-100   text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  "
          >
            <option value="">Privilage</option>
            {roles.map((role) => (
              <option value={role}>{role}</option>
            ))}
          </select>
          {errors.privilage && touched.privilage && (
            <h1 className="text-xs pt-2 text-rose-500 ">{errors.privilage}</h1>
          )}
        </div>

        <button
          type="button"
          class={` text-white mx-auto grid bg-[#02345D] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center `}
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
