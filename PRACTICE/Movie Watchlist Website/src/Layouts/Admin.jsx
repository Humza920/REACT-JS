import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200 font-poppins">
      {/* 🔹 Sidebar */}
      <aside className="w-80 fixed top-0 left-0 h-full bg-slate-800/90 backdrop-blur-2xl border-r border-slate-700/50 p-6 flex flex-col gap-4 overflow-hidden shadow-2xl">
        {/* Subtle background glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* 🔸 Logo + Title */}
        <div className="relative z-10 flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl shadow-md">
            <i className="fas fa-clapperboard text-white text-lg"></i>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            CineStream Pro
          </h2>
        </div>

        {/* 🔸 Profile Section */}
        <div className="relative z-10 flex items-center justify-between bg-slate-700/40 rounded-xl border border-slate-600/50 p-3 shadow-inner hover:shadow-cyan-500/10 transition-all duration-300">
          <div>
            <p className="text-sm font-semibold text-cyan-400 flex items-center gap-1">
              <i className="fas fa-user-shield"></i> Admin User
            </p>
            <p className="text-xs text-slate-400">Super Administrator</p>
          </div>
          <div className="relative group">
            <button className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-slate-600 hover:border-cyan-500/30 transition-all duration-300 group-hover:scale-105">
              <i className="fas fa-user-cog text-cyan-400"></i>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 top-full mt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 w-44 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-lg p-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-700/50 transition-colors text-sm">
                <i className="fas fa-cog text-cyan-400"></i> Settings
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-700/50 transition-colors text-sm">
                <i className="fas fa-sign-out-alt text-red-400"></i> Logout
              </button>
            </div>
          </div>
        </div>

        {/* 🔸 Navigation Links */}
        <nav className="relative z-10 mt-6 space-y-2 flex-1">
          {[
            { to: "/admin/addmovie", icon: "fa-plus-circle", label: "Add Movie" },
            { to: "/admin/usermanage", icon: "fa-users-cog", label: "User Management" },
            { to: "/admin/moviemanage", icon: "fa-film", label: "Movie Management" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-300 group ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border-cyan-500/30 text-cyan-400 shadow-lg shadow-cyan-500/10"
                    : "border-transparent hover:bg-slate-700/50 hover:border-slate-600 hover:translate-x-1"
                }`
              }
            >
              <i
                className={`fas ${item.icon} text-lg ${
                  location.pathname === item.to
                    ? "text-cyan-400"
                    : "text-slate-400 group-hover:text-cyan-400"
                }`}
              ></i>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* 🔸 Home Link */}
        <div className="relative z-10 mt-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 group ${
                isActive
                  ? "bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border-cyan-500/30 text-cyan-400"
                  : "border-transparent hover:bg-slate-700/50 hover:border-slate-600"
              }`
            }
          >
            <i className="fas fa-house-user text-lg text-slate-400 group-hover:text-cyan-400"></i>
            Back to Home
          </NavLink>
        </div>
      </aside>

      {/* 🔹 Main Content */}
      <main className="flex-1 ml-80 bg-gradient-to-br from-slate-900 via-slate-800/70 to-slate-900 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto transition-all duration-500">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Admin;
