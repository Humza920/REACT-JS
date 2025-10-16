import React from "react";
import { useAuth } from "../Context/authcontext";

const AdminUserManage = () => {
  const { allUsers } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* 🔹 Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h2 className="text-3xl font-bold text-cyan-400 tracking-tight">
            User Management
          </h2>
          <p className="text-slate-400 text-sm mt-2 sm:mt-0">
            Manage all registered users of your platform
          </p>
        </div>

        {/* 🧍 Users Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(allUsers || []).length > 0 ? (
            allUsers.map((user, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-cyan-500/20 transition-all border border-slate-800 hover:border-cyan-600 p-5 flex flex-col items-center text-center"
              >
                {/* 👤 Profile Image */}
                <img
                  src={
                    user?.profilePic ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt={user?.name || "User"}
                  className="w-24 h-24 rounded-full object-cover border-2 border-slate-700 shadow-md mb-4"
                />

                {/* 🧾 Info */}
                <h3 className="text-lg font-semibold text-cyan-400">
                  {user?.name || "Unnamed User"}
                </h3>
                <p className="text-sm text-slate-400 break-all">
                  {user?.email || "No email provided"}
                </p>

                <div className="mt-3 bg-slate-800/60 px-3 py-1 rounded-lg text-sm text-slate-300 border border-slate-700">
                  Role:{" "}
                  <span
                    className={`font-semibold ${
                      user?.role === "Admin"
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {user?.role || "User"}
                  </span>
                </div>

                {/* 🕒 Created Date */}
                <p className="text-xs text-slate-500 mt-2">
                  Joined:{" "}
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>

                {/* 🔘 Action Buttons */}
                <div className="flex justify-center gap-3 mt-4 w-full">
                  <button className="px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 text-sm transition-all">
                    View
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 text-sm transition-all">
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-500 col-span-full">
              No users found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUserManage;
