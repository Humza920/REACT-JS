import React, { useState } from "react";
import { useTodo } from "../context/todocontext";
import Card from "./Card";
const Form = () => {
  const { todos, addTodo } = useTodo();
  const [todotitle, setTodotitle] = useState("");
  let todoObj = {};
  const onSubmitBtn = (e) => {
    e.preventDefault();
    todoObj = {
      id: Date.now(),
      todotitle,
      isCompleted: false,
    };
    addTodo(todoObj);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter Todo"
          value={todotitle}
          onChange={(e) => {
            setTodotitle(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            onSubmitBtn(e);
          }}
        >
          Click
        </button>
      </form>
      <br />
      <ul>
        {todos.map((todo) => {
          return <li><Card key={todo.id} todo={todo} /></li>;
        })}
      </ul>
    </>
  );
};

export default Form;
