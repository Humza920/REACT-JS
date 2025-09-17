import { useState, useEffect } from "react";
import { TodoProvider } from "./context/todocontext";
import Form from "./components/Form";

function App() {
  let getarr = localStorage.getItem("savedArr");
  getarr = JSON.parse(getarr);

  const [todos, settodos] = useState(getarr || []);

  useEffect(() => {
    localStorage.setItem("savedArr", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    settodos([...todos, todo]);
  };

  const updateTodo = (id, todotitle) => {
    const gettodoforupdate = todos.find((x) => x.id === id);
    const index = todos.indexOf(gettodoforupdate);
    gettodoforupdate.todotitle = todotitle;
    settodos((prev) => {
      let newTodos = [...prev];
      newTodos[index] = gettodoforupdate;
      return newTodos;
    });
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    settodos(newTodos);
  };

  const isdoneTodo = (id, bolean) => {
    const isdone = todos.find((x) => x.id === id);
    isdone.isCompleted = bolean;
    const index = todos.indexOf(isdone);
    const newTodos = [...todos];
    newTodos[index] = isdone;
    settodos(newTodos);
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, isdoneTodo }}
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center py-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-sm">
          📝 Todo App
        </h1>

        {/* Form + Todos */}
        <Form />
      </div>
    </TodoProvider>
  );
}

export default App;
