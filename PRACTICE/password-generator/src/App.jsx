import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [pass, setPass] = useState("");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [length, setLength] = useState(8);
  const passRef = useRef(null)

  const generatePassword = () => {
    let password = "";
    let arr = [];
    console.log(length);

    if (lowercase) {
      arr.push(
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      );
    }
    if (uppercase) {
      arr.push(
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
    }
    if (number) {
      arr.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
    if (symbol) {
      arr.push("!", "@", "#", "$", "^", "&", "*", "?", "~");
    }
    if (arr.length === 0) {
      return alert("Cant generate a password please select any format");
    }
    console.log(arr);

    for (let i = 0; i < length; i++) {
      const randomPick = Math.floor(Math.random() * arr.length);
      password += arr[randomPick];
    }
    setPass(password);
  };

  useEffect(() => {
    generatePassword();
  }, [length, lowercase, uppercase, symbol, number]);

  // const ongenerateclick = ()=>{
  //   generatePassword()
  // }

  const copy = () => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[28rem] space-y-6">
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          🔑 Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none text-center text-gray-700 font-mono"
            placeholder="Your secure password"
            readOnly
            value={pass}
            ref = {passRef}
          />
          <button className="px-3 py-2 text-sm bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"onClick={copy}>
            Copy
          </button>
        </div>

        {/* Options */}
        <div className="space-y-5">
          {/* Range Slider */}
          <div>
            <label
              htmlFor="passRange"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password Length : {length}
            </label>
            <input
              type="range"
              name="passRange"
              id="passRange"
              min="5"
              max="20"
              className="w-full accent-indigo-600 cursor-pointer"
              value={length}
              onChange={(e) => {
                console.log(e.target.value);
                setLength(e.target.value);
              }}
            />
            <p className="text-xs text-gray-500 mt-1">
              Choose between 5-20 characters
            </p>
          </div>

          {/* Checkboxes */}
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={number}
                className="h-5 w-5 accent-indigo-600"
                onChange={(e) => setNumber(e.target.checked)}
              />
              Include Numbers
            </label>
            <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={symbol}
                className="h-5 w-5 accent-indigo-600"
                onChange={(e) => setSymbol(e.target.checked)}
              />
              Include Symbols
            </label>
            <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={uppercase}
                className="h-5 w-5 accent-indigo-600"
                onChange={(e) => setUppercase(e.target.checked)}
              />
              Uppercase Letters
            </label>
            <label className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={lowercase}
                className="h-5 w-5 accent-indigo-600"
                onChange={(e) => setLowercase(e.target.checked)}
              />
              Lowercase Letters
            </label>
          </div>
        </div>

        {/* Generate Button */}
        {/* <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform">
          Generate Password
        </button> */}
      </div>
    </div>
  );
}

export default App;
