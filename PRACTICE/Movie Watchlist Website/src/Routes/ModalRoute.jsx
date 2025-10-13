import { Navigate } from "react-router-dom"
import { useModal } from "../Context/modalcontext"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"

const ModalRoute = () => {
    const {modalType , modalStatus } = useModal()
    if (!modalStatus) null
  return (
    <>
    {modalType === "login" ? <Login /> : <Signup />}    
    </>
  )
}

export default ModalRoute