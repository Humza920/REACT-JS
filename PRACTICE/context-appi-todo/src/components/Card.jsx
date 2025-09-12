import React, { useState } from "react";
import { useTodo } from "../context/todocontext";
const Card = ({ todo }) => {
  const { updateTodo, deleteTodo } = useTodo();
  const [isDisable, setisDisable] = useState(true);
  const [todotitle, settodotitle] = useState(todo.todotitle);

  const onClickUpdate = () => {
    if (isDisable === true) {
      setisDisable(false);
    }
    else{
      setisDisable(true)
      updateTodo(todo.id, todotitle);
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          value={todotitle}
          disabled={isDisable}
          onChange={(e) => {
            settodotitle(e.target.value);
          }}
        />
        <button className="bg-red-400 rounded-3xl" onClick={onClickUpdate}>Edit</button>
        <button className="bg-red-400 rounded-3xl">Delete</button>
      </div>
    </>
  );
};

export default Card;
