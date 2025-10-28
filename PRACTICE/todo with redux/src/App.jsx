import Todoinput from "./components/Todoinput"; 
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-[Poppins]">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-[400px]">
        <h1 className="text-2xl font-semibold text-center mb-6">📝 Todo List</h1>
        <Todoinput />
      </div>
    </div>
  );
};

export default App;
