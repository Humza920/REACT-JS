import React, { useState } from "react";
import { useTodo } from "../context/todocontext";
import Card from "./Card";

const Form = () => {
  const { todos, addTodo } = useTodo();
  const [todotitle, setTodotitle] = useState("");

  const onSubmitBtn = (e) => {
    e.preventDefault();
    if (!todotitle.trim()) return; // empty todo prevent
    const todoObj = {
      id: Date.now(),
      todotitle,
      isCompleted: false,
    };
    addTodo(todoObj);
    setTodotitle(""); // reset input
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      {/* Form */}
      <form onSubmit={onSubmitBtn} className="flex items-center gap-3 mb-5">
        <input
          type="text"
          placeholder="Enter todo..."
          value={todotitle}
          onChange={(e) => setTodotitle(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg 
                     hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!todotitle.trim()}
        >
          Add
        </button>
      </form>

      {/* Todo List */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Form;
