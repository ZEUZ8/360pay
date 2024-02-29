import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

// Create the context
const AppContext = createContext();

// Create the provider component
const AppProvider = ({ children }) => {

  const [users, setUsers] = useState([]);
  const [photo, setPhoto] = useState('');
  const [name,setUserName] = useState('');
  const [loading,setLoading] = useState(false)

  const value = {
    photo,
    users,
    name,
    loading,
    setPhoto,
    setUsers,
    setUserName,
    setLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };