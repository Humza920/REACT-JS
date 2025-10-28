import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { addtodo, markasdone, removetodo } from "../features/todo/todoslice";
const Todoinput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todosArr = useSelector((state) => state.todo.todos);

  console.log(todosArr);

  const onSubmitBtn = (e) => {
    e.preventDefault();
    const obj = {
      todotitle: input,
      isCompleted: false,
      id: nanoid(),
    };
    dispatch(addtodo(obj));
    setInput("");
  };

  return (
    <>
      {/* Input Section */}
      <div className="flex items-center gap-2 mb-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={onSubmitBtn}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="space-y-3">
        {todosArr.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg border"
          >
            <span
              className={`${
                todo.isCompleted ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.todotitle}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  dispatch(markasdone(todo.id));
                }}
                className="text-green-500 hover:text-green-700 transition-all"
              >
                ✅
              </button>
              <button
                onClick={() => {
                  dispatch(removetodo(todo.id));
                }}
                className="text-red-500 hover:text-red-700 transition-all"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="text-center mt-5 text-gray-500 text-sm">
        2 tasks remaining
      </div>
    </>
  );
};

export default Todoinput;
