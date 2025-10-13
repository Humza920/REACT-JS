import { useAuth } from "../Context/authcontext"
import { Navigate } from "react-router-dom"
const AdminRoute = ({children}) => {
  const {user , userRole , loading} = useAuth()
  console.log(user , userRole , loading);

  if (loading) {
    return <>
    <h1>Loading ...</h1>
    </>
  }

    if (!user) {
    console.log("Plz Login");
    return <Navigate to="/" replace/>
  }
  if (userRole !== "Admin") {
    console.log("ENTRY NOT ALLOWED");
    return <Navigate to="/" replace/>
  }



  return children
}

export default AdminRoute