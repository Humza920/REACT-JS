import { useState, useEffect } from "react";
import { TodoProvider } from "./context/todocontext";
import Form from "./components/Form";
function App() {
  let getarr = localStorage.getItem("savedArr");
  getarr = JSON.parse(getarr);
  console.log(getarr);

  const [todos, settodos] = useState(getarr || []);

  useEffect(() => {
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
    // console.log(todos.splice(index , 1 , gettodoforupdate));
    
    settodos(todos.splice(index , 1 , gettodoforupdate))
  };
  const deleteTodo = (id) => {};

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
