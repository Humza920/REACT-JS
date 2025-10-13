import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useModal } from "../Context/modalcontext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {toggleModal} = useModal()
  const navLinks = [
    { to: "/", label: "Home", icon: "fa-home" },
    { to: "/movies", label: "Movies", icon: "fa-film" },
    { to: "/trending", label: "Trending", icon: "fa-fire" },
    { to: "/top-rated", label: "Top Rated", icon: "fa-star" },
    { to: "/watchlist", label: "Watchlist", icon: "fa-heart" },
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg shadow-lg">
                <i className="fas fa-film text-white text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  CineStream
                </span>
                <span className="text-xs text-slate-400 -mt-1">
                  Watch Movies Online
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      isActive
                        ? "text-cyan-400 bg-slate-800/50"
                        : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                    }`
                  }
                >
                  <i className={`fas ${link.icon}`}></i>
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all">
                <i className="fas fa-search text-lg"></i>
              </button>

              {/* 🟢 Login & Signup Buttons */}
              <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all shadow-md"onClick={()=>{
                toggleModal(true , "login")
              }}>
                Login
              </button>
              <button className="px-4 py-2 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition-all shadow-md"onClick={()=>{
                toggleModal(true , "signup")
              }}>
                Sign Up
              </button>

              {/* 🔵 Profile Button (commented) */}
              {/* <button className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all">
                <i className="fas fa-user text-lg"></i>
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-slate-700/50">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 py-3 px-4 rounded-lg font-medium transition-all ${
                      isActive
                        ? "text-cyan-400 bg-slate-800/50"
                        : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                    }`
                  }
                >
                  <i className={`fas ${link.icon} w-5`}></i>
                  <span>{link.label}</span>
                </NavLink>
              ))}

              <div className="flex space-x-2 pt-3 border-t border-slate-700/50">
                <button className="flex-1 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all flex items-center justify-center space-x-2">
                  <i className="fas fa-search"></i>
                  <span>Search</span>
                </button>

                {/* 🔵 Profile Button commented out */}
                {/* <button className="flex-1 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all flex items-center justify-center space-x-2">
                  <i className="fas fa-user"></i>
                  <span>Profile</span>
                </button> */}
              </div>

              {/* 🟢 Login / Signup for Mobile */}
              <div className="flex space-x-2 pt-3 border-t border-slate-700/50">
                <button className="flex-1 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all">
                  Login
                </button>
                <button className="flex-1 py-3 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition-all">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
