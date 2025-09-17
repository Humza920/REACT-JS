import React, { useState } from "react";
import { useTodo } from "../context/todocontext";

const Card = ({ todo }) => {
  const { updateTodo, deleteTodo, isdoneTodo } = useTodo();
  const [isDisable, setisDisable] = useState(true);
  const [todotitle, settodotitle] = useState(todo.todotitle);

  const onClickUpdate = () => {
    if (isDisable) {
      setisDisable(false);
    } else {
      setisDisable(true);
      updateTodo(todo.id, todotitle);
    }
  };

  const onClickDelete = () => {
    deleteTodo(todo.id);
  };

  const onClickDone = () => {
    isdoneTodo(todo.id, !todo.isCompleted);
  };

  return (
    <div className="flex items-center justify-between w-full bg-white rounded-xl shadow-md px-4 py-3 mb-3 border border-gray-200">
      {/* Todo text / input */}
      <div className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={onClickDone}
          className="w-4 h-4 accent-blue-500 cursor-pointer"
        />
        <input
          type="text"
          value={todotitle}
          disabled={isDisable}
          onChange={(e) => settodotitle(e.target.value)}
          className={`flex-1 bg-transparent outline-none ${
            todo.isCompleted ? "line-through text-gray-500" : "text-gray-800"
          } ${
            isDisable
              ? "cursor-default"
              : "border border-blue-400 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500"
          }`}
        />
        {todo.isCompleted && (
          <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
            Completed
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 ml-4">
        <button
          disabled={todo.isCompleted}
          onClick={onClickUpdate}
          className="px-3 py-1 rounded-lg text-sm font-medium 
                     bg-blue-500 text-white 
                     hover:bg-blue-600 
                     disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isDisable ? "Edit" : "Save"}
        </button>

        <button
          disabled={todo.isCompleted}
          onClick={onClickDelete}
          className="px-3 py-1 rounded-lg text-sm font-medium 
                     bg-red-500 text-white 
                     hover:bg-red-600 
                     disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
