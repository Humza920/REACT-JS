import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-green-600");

  function bgChange(color: string) {
    setColor(color);
  }

  return (
    <>
      <div
        className={`w-full h-screen ${color}`}
      >
        <div className="fixed bottom-20  flex flex-wrap items-center gap-4 justify-center">
          <button
            type="button"
            onClick={() => {
              bgChange("bg-red-600");
            }}
            className="cursor-pointer px-[15px] py-[8px] rounded-3xl border-2 border-black bg-red-600"
          >
            Red
          </button>
          <button
            type="button"
            onClick={() => {
              bgChange("bg-yellow-600");
            }}
            className="cursor-pointer px-[15px] py-[8px] rounded-3xl border-2 border-black bg-yellow-600"
          >
            Yellow
          </button>
          <button
            type="button"
            onClick={() => {
              bgChange("bg-white");
            }}
            className="cursor-pointer px-[15px] py-[8px] rounded-3xl border-2 border-black bg-white"
          >
            White
          </button>
          <button
            type="button"
            onClick={() => {
              bgChange("bg-black");
            }}
            className="cursor-pointer px-[15px] py-[8px] rounded-3xl border-2 border-black text-white bg-black"
          >
            Black
          </button>
          <button
            type="button"
            onClick={() => {
              bgChange("bg-green-600");
            }}
            className="cursor-pointer px-[15px] py-[8px] rounded-3xl border-2 border-black bg-green-600"
          >
            Green
          </button>
          <button
            type="button"
            onClick={() => {
              bgChange("bg-gray-600");
            }}
            className="cursor-pointer px-[15px] py-[8px] rounded-3xl border-2 border-black bg-gray-600"
          >
            Gray
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
