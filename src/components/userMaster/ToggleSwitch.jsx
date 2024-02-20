import React, { useContext, useEffect, useState } from "react";
import "./toggle.css";
import { AppContext } from "../../Context/AppProvider";

function ToggleSwitch({ currentUser }) {
  const { users, setUsers } = useContext(AppContext);
  const [status, setStatus] = useState(currentUser.status);

  const handleChange = () => {
    setStatus((prev) => !prev);
    setUsers((prev)=>{
        return prev.map(user=>{
            if(user.userId === currentUser.userId){
                return {...user, status : !status}
            }
            return user
        })
    })
  };


  return (
    <div className="switch-container z-10">
      <label className="switch bg-pink-300 z-5">
        <input type="checkbox" value={status} onChange={handleChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
