import React from 'react'

const Todoinput = () => {
  return (
    <>
            {/* Input Section */}
        <div className="flex items-center gap-2 mb-5">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          <li className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg border">
            <span>Learn Redux Toolkit</span>
            <div className="flex items-center gap-2">
              <button className="text-green-500 hover:text-green-700 transition-all">
                ✅
              </button>
              <button className="text-red-500 hover:text-red-700 transition-all">
                ❌
              </button>
            </div>
          </li>

          <li className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg border">
            <span>Build Todo App UI</span>
            <div className="flex items-center gap-2">
              <button className="text-green-500 hover:text-green-700 transition-all">
                ✅
              </button>
              <button className="text-red-500 hover:text-red-700 transition-all">
                ❌
              </button>
            </div>
          </li>
        </ul>

        {/* Footer */}
        <div className="text-center mt-5 text-gray-500 text-sm">
          2 tasks remaining
        </div>
    </>
  )
}

export default Todoinput