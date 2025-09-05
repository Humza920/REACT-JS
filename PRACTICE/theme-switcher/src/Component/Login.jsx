import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
const Login = () => {
  const [userName, setuserName] = useState("");
  const [pass, setpass] = useState("");
  const {setuserdata} = useContext(UserContext)
  function submitbtn() {
    setuserdata({userName , pass})
    setuserName("")
    setpass("")
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 h-[50vh] text-white bg-black">
        <div className="flex gap-4">
          <input
            className="text-white border border-gray-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userName}
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
          <input
            className="text-white border border-gray-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={pass}
            type="text"
            placeholder="Enter your password"
            onChange={(e) => {
              setpass(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold p-4 rounded hover:bg-blue-700 transition duration-300"
            onClick={submitbtn}
          >
            Login
          </button>
        </div>
        <div>
          <h1 className="text-4xl">Login</h1>
        </div>
      </div>
    </>
  );
};

export default Login;
