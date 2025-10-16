import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useModal } from "../Context/modalcontext";
import { useAuth } from "../Context/authcontext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleModal } = useModal();
  const { user, userRole, loading, logoutUser } = useAuth();

  const navLinks = [
    { to: "/", label: "Home", icon: "fa-home" },
    { to: "/movies", label: "Movies", icon: "fa-film" },
    { to: "/trending", label: "Trending", icon: "fa-fire" },
    { to: "/top-rated", label: "Top Rated", icon: "fa-star" },
    { to: "/watchlist", label: "Watchlist", icon: "fa-heart" },
  ];

  return (
    <>
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
                  CineStream Pro
                </span>
                <span className="text-xs text-slate-400 -mt-1">
                  Watch Movies Online
                </span>
              </div>
            </div>

            {/* Desktop Nav Links */}
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

              {/* Admin Dropdown */}
              {!loading && userRole === "Admin" && (
                <div className="relative group">
                  <NavLink
                    to="/admin"
                    className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-cyan-400 transition-all"
                  >
                    <i className="fas fa-user-shield"></i>
                    Admin Dashboard
                  </NavLink>

                  {/* Dropdown */}
                  <div
                    className="absolute left-0 top-full mt-1 bg-slate-800 rounded-lg shadow-lg 
                    w-48 border border-slate-700 opacity-0 invisible group-hover:opacity-100 
                    group-hover:visible transition-all duration-200 z-50"
                  >
                    <NavLink
                      to="/admin/addmovie"
                      className="block px-4 py-2 text-slate-300 hover:bg-cyan-600 hover:text-white transition-all"
                    >
                      Add Movie
                    </NavLink>
                    <NavLink
                      to="/admin/users"
                      className="block px-4 py-2 text-slate-300 hover:bg-cyan-600 hover:text-white transition-all"
                    >
                      Users
                    </NavLink>
                    <NavLink
                      to="/admin/movies"
                      className="block px-4 py-2 text-slate-300 hover:bg-cyan-600 hover:text-white transition-all"
                    >
                      Movies
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all">
                <i className="fas fa-search text-lg"></i>
              </button>

              {/* Auth Buttons */}
              {!loading && (
                <>
                  {!user ? (
                    <>
                      <button
                        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all shadow-md"
                        onClick={() => toggleModal(true, "login")}
                      >
                        Login
                      </button>
                      <button
                        className="px-4 py-2 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition-all shadow-md"
                        onClick={() => toggleModal(true, "signup")}
                      >
                        Sign Up
                      </button>
                    </>
                  ) : (
                    <div className="relative group">
                      <button
                        className="p-2 rounded-full bg-slate-800/60 border border-slate-700 text-slate-300 
                           hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300 
                           shadow-md backdrop-blur-md"
                      >
                        <i className="fas fa-user text-lg"></i>
                      </button>

                      {/* Dropdown */}
                      <div
                        className="absolute right-0 mt-2 w-36 bg-slate-800 border border-slate-700/60 
                        rounded-xl shadow-xl opacity-0 scale-95 group-hover:opacity-100 
                        group-hover:scale-100 transform transition-all duration-200 origin-top-right z-50"
                      >
                        <button
                          className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-600 hover:text-white 
                       transition-all rounded-lg flex items-center gap-2"
                          onClick={logoutUser} // 🔹 apni logout function se replace karo
                        >
                          <i className="fas fa-sign-out-alt"></i>
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
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

              {/* 🔹 Admin Section (mobile) */}
              {!loading && userRole === "Admin" && (
                <div className="border-t border-slate-700/50 pt-3">
                  <NavLink
                    to="/admin"
                    className="flex items-center space-x-3 py-3 px-4 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className="fas fa-user-shield w-5"></i>
                    <span>Admin Dashboard</span>
                  </NavLink>
                  <div className="pl-8 space-y-1">
                    <NavLink
                      to="/admin/addmovie"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-slate-400 hover:text-cyan-400 transition-all"
                    >
                      Add Movie
                    </NavLink>
                    <NavLink
                      to="/admin/usermanage"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-slate-400 hover:text-cyan-400 transition-all"
                    >
                      Users
                    </NavLink>
                    <NavLink
                      to="/admin/moviemanage"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-slate-400 hover:text-cyan-400 transition-all"
                    >
                      Movies
                    </NavLink>
                  </div>
                </div>
              )}

              {/* Search Button */}
              <div className="flex space-x-2 pt-3 border-t border-slate-700/50">
                <button className="flex-1 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all flex items-center justify-center space-x-2">
                  <i className="fas fa-search"></i>
                  <span>Search</span>
                </button>
              </div>

              {/* Auth Buttons (mobile) */}
              {!loading && (
                <div className="flex space-x-2 pt-3 border-t border-slate-700/50">
                  {!user ? (
                    <>
                      <button
                        onClick={() => toggleModal(true, "login")}
                        className="flex-1 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => toggleModal(true, "signup")}
                        className="flex-1 py-3 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition-all"
                      >
                        Sign Up
                      </button>
                    </>
                  ) : (
                    <button className="flex-1 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all">
                      <i className="fas fa-user text-lg"></i>
                      <span className="ml-2">Profile</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
