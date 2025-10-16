import { Navigate } from "react-router-dom"
import { useModal } from "../Context/modalcontext"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"

const ModalRoute = () => {
    const {modalType , modalStatus} = useModal()
    console.log(modalStatus);
    
    if (!modalStatus) return null
  return (
    <>
    {modalType === "login" ? <Login /> : <Signup />}    
    </>
  )
}

export default ModalRoute