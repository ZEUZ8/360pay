import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { userMasterValidation } from "../../validation/userMaster";
import { IoIosClose } from "react-icons/io";
import { AppContext } from "../../Context/AppProvider";

const Form = ({ handleUser, row, setModal, updateUser }) => {
  const { users, setUsers } = useContext(AppContext);
  const [roles, setRoles] = useState(["admin", "employee"]);
  const [roleError,setRoleError] = useState(false)

  const onSubmit = async (values) => {
    values.userId = `${values?.userName}12`;
    console.log(values,' the avlue in the soneole')
    if(values.privilage){
      setRoleError(false)
      handleUser(values);
    }else{
      setRoleError(true)
    }
  };

  // const handleRemove = () => {
  //   console.log("clicked the handle Remvoe function", row);
  //   //making an api call for soft deleting and making it unavailable for the users
  // };

 
  const handleUpdation = () => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.userId === values.userId) {
          return values;
        }
        return user; // Return the original user object if it doesn't match
      });
    });
    setModal(false);
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        userId: row ? row?.userId : "",
        userName: row ? row?.userName : "",
        password: row ? row?.password : "",
        privilage: row ? row?.privilage : "",
      },
      validationSchema: userMasterValidation,
      onSubmit,
    });

    useEffect(()=>{
      if(values.privilage === ""){
        setRoleError(true)
      }else{
        setRoleError(false)
      }
    },[values.privilage])
  
  return (
    <div className="p-5 bg-white  rounded-xl shadow-special w-full">
      {row && (
        <div
          onClick={() => setModal(false)}
          className="flex justify-end pb-4 text-xl text-black"
        >
          <IoIosClose />
        </div>
      )}
      <div className="mb-4 ">
        <input
          type="text"
          id="userName"
          className={`${
            errors.userName && touched.userName && `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={
            errors.userName && touched.userName
              ? `User Name ${errors.userName}`
              : "User Name"
          }
        />
        {errors.userName && touched.userName && values.userName.length > 0 && (
          <h1 className="text-xs pt-2 text-rose-500 ">{errors.userName}</h1>
        )}
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="password"
          className={`${
            errors.password && touched.password && `placeholder:text-red-500`
          } bg-gray-100  text-gray-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 `}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={errors.password && touched.password ? `Password ${errors.password} ` : "Password"}
        />
        {errors.password && touched.password && values.password.length > 0 && (
          <h1 className="text-xs pt-2 text-rose-500 ">{errors.password}</h1>
        )}
      </div>
      <div className="mb-4">
        <select
          id="privilage"
          
          value={values.privilage}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${roleError ? "text-rose-500 animate-pulse" : "text-gray-500"} bg-gray-100    text-xs  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  `}
        >
          <option value="" className="placeholder:text-red-500">Privilage</option>
          {roles.map((role) => (
            <option value={role} key={role}>{role}</option>
          ))}
        </select>
        {errors.privilage && touched.privilage && (
          <h1 className="text-xs pt-2 text-rose-500 ">{errors.privilage}</h1>
        )}
      </div>

      {row ? (
        <button
          type="button"
          className={` text-white mx-auto grid bg-[#02345D] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center `}
          onClick={handleUpdation}
        >
          Update
        </button>
      ) : (
        <button
          type="button"
          className={` text-white mx-auto grid bg-[#02345D] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center `}
          onClick={handleSubmit}
        >
          Create
        </button>
      )}
    </div>
  );
};

export default Form;
