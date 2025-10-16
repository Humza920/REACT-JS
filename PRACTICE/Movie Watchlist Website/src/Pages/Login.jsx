import { useState } from "react";
import { useModal } from "../Context/modalcontext";
import { useAuth } from "../Context/authcontext";

const LoginModal = () => {

  const {loginUser} = useAuth()
  const {modalStatus , toggleModal} = useModal()
  const [email , setEmail] = useState("")
  const [pass , setPass] = useState("")

  if (!modalStatus) return null;

  const clickONSubmit = ()=>{
    loginUser(email , pass)
    setEmail("")
    setPass("")
  }
  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl flex items-center justify-center z-50">
      <div className="bg-slate-800/90 border border-slate-700/50 rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
        
        {/* Close Button */}
        <button
          onClick={ ()=>toggleModal(false , "login")}
          className="absolute top-4 right-4 text-slate-400 hover:text-cyan-400 transition"
        >
          <i className="fas fa-times text-lg"></i>
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-cyan-600 rounded-xl shadow-lg shadow-cyan-500/30">
            <i className="fas fa-sign-in-alt text-white text-lg"></i>
          </div>
          <h2 className="text-2xl font-semibold text-cyan-400">Login</h2>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="text-sm text-slate-400">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
              placeholder="you@example.com"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>

          <div>
            <label className="text-sm text-slate-400">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
              placeholder="••••••••"
              value={pass}
              onChange={(e)=>{setPass(e.target.value)}}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-cyan-600 hover:bg-cyan-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20"
            onClick={(e)=>{e.preventDefault()
              clickONSubmit()
              toggleModal(false , "login")
            }}
          >
            Login
          </button>
        </form>

        {/* Switch */}
        <p className="text-sm text-slate-400 text-center mt-6">
          Don’t have an account?{" "}
          <button
            onClick={()=>toggleModal(true , "signup")}
            className="text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
