import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { userMasterValidation } from "../../validation/userMaster";
import { IoIosClose } from "react-icons/io";
import { AppContext } from "../../Context/AppProvider";
import { postUserMaster } from "../../Api/services/userServices";

const Form = ({ handleUser, row, setModal, updateUser, setDuplicateUser }) => {
  const { users, setUsers } = useContext(AppContext);
  const [roles, setRoles] = useState(["admin", "employee"]);
  const [roleError, setRoleError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    // console.log(values,' the avlue in the soneole')
    if (values.authorization) {
      setRoleError(false);
      try {
        values.isActive = true;
        values.OpMode = "I";
        console.log(values.authorization);
        const response = await postUserMaster(values);
        if (response) {
          if (response?.data?.isSuccess) {
            setDuplicateUser(false);
            const userId = response.data.data.match(/\d+$/)[0];
            values.userId = userId;
            console.log(values, " the values in the cvonsole");
            handleUser(values);
            resetForm();
          } else if (!response?.response?.data.isSuccess) {
            console.log(" consoling in the after");
            setDuplicateUser(true);
          }
        }
      } catch (err) {
        console.log(err, " the err");
      }
    } else {
      setRoleError(true);
    }
  };

  // const handleRemove = () => {
  //   console.log("clicked the handle Remvoe function", row);
  //   //making an api call for soft deleting and making it unavailable for the users
  // };

  const handleUpdation = async () => {
    if(!roleError){
      try {
        users.map(async (user) => {
          if (user.userId === values.userId) {
            values.OpMode = "U";
            values.isActive = user.isActive;
            console.log(values, " at the end ");
            const response = await postUserMaster(values);
            if (response?.data?.isSuccess) {
              setUsers((prev) => {
                return prev.map((user) => {
                  if(user.userId === values.userId ){
                    return {...user,...values}
                  }
                  return user
                });
              });
            }
            console.log(users,' the ser')
          }
        });
      } catch (err) {
        console.log(err, " error in the updation page");
      }
      setModal(false);
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
      userId: row ? row?.userId : "",
      userName: row ? row?.userName : "",
      password: row ? row?.password : "",
      authorization: row ? row?.authorization : "",
    },
    validationSchema: userMasterValidation,
    onSubmit,
  });

  useEffect(() => {
    if (values.authorization === "") {
      setRoleError(true);
    } else {
      setRoleError(false);
    }
  }, [values.authorization]);

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
          placeholder={
            errors.password && touched.password
              ? `Password ${errors.password} `
              : "Password"
          }
        />
        {errors.password && touched.password && values.password && (
          <h1 className="text-xs pt-2 text-rose-500 ">{errors.password}</h1>
        )}
      </div>
      <div className="mb-4">
        <select
          id="authorization"
          value={values.authorization}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            roleError ? "text-rose-500 animate-pulse" : "text-gray-500"
          } bg-gray-100    text-xs  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5  `}
        >
          <option value="" className="placeholder:text-red-500">
            Privilage
          </option>
          {roles.map((role) => (
            <option value={role} key={role}>
              {role}
            </option>
          ))}
        </select>
        {errors.authorization && touched.authorization && (
          <h1 className="text-xs pt-2 text-rose-500 ">
            {errors.authorization}
          </h1>
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
