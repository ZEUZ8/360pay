import React, { useContext, useEffect, useState } from "react";
import "./toggle.css";
import { AppContext } from "../../Context/AppProvider";
import { postUserMaster } from "../../Api/services/userServices";

function ToggleSwitch({ currentUser }) {
  const { users, setUsers } = useContext(AppContext);
  const [status, setStatus] = useState(currentUser.isActive);

  const handleChange = () => {
    setStatus((prev) => !prev);
    users.map(async(user)=>{
      if(user.userId === currentUser.userId){
        console.log(user,'user te' , currentUser, ' current user in teh consoel')
        try{
          user.OpMode = "U",
          user.isActive = !user.isActive
          console.log(user,' th user')
          const response = await postUserMaster(user)
          console.log(response,' teh response')
        }catch(err){
          console.log(err,' the errro')
        }
      }
    })
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox"
        value=""
        className="sr-only peer"
        checked={status}
        onChange={handleChange} />
      <div
        className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer ${
          status ? "peer-checked bg-gray-900" : ""
        }`}
      >
        <div
          className={`after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${
            status
              ? "after:translate-x-full rtl:peer-checked:after:-translate-x-full"
              : ""
          }`}
        ></div>
      </div>
    </label>
  );
}

export default ToggleSwitch;
