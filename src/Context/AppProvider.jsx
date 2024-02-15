import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

// Create the context
const AppContext = createContext();

// Create the provider component
const AppProvider = ({ children }) => {

  const [users, setUsers] = useState([]);

  const value = {
    users,
    setUsers,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };