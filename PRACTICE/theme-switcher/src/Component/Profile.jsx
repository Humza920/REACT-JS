import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { userdata } = useContext(UserContext);
  console.log(userdata);
  
  if (!userdata.userName) {
    return <h1>no data</h1>
}
else{
return(
    <h1>Welcome {userdata.userName}</h1>
  )
}
};

export default Profile;
