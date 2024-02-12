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
    <div>
      <label class="switch">
        <input type="checkbox" value={status} onChange={handleChange} />
        <span class="slider"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
