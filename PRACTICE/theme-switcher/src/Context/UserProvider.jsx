import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({children}) => {
  const [userdata, setuserdata] = useState({});
  return (
    <UserContext.Provider value={{ userdata, setuserdata }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
