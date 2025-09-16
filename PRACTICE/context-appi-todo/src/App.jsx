import { useState, useEffect } from "react";
import { TodoProvider } from "./context/todocontext";
import Form from "./components/Form";
function App() {
  let getarr = localStorage.getItem("savedArr");
  getarr = JSON.parse(getarr);

  const [todos, settodos] = useState(getarr || []);

  useEffect(() => {
    console.log("run");
    localStorage.setItem("savedArr", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    settodos([...todos, todo]);
  };

  const updateTodo = (id, todotitle) => {
    const gettodoforupdate = todos.find((x) => {
      return x.id === id;
    });
    const index = todos.indexOf(gettodoforupdate);
    gettodoforupdate.todotitle = todotitle;
    settodos((prev) => {
      console.log(prev);
      let newTodos = [...prev];
      newTodos[index] = gettodoforupdate;
      return newTodos;
    });
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    settodos(newTodos);
  };

  return (
    <>
      <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo }}>
        <h1>Todo List</h1>
        <Form />
      </TodoProvider>
      ;
    </>
  );
}

export default App;
