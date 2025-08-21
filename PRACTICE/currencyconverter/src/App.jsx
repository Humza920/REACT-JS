import { useState } from "react";
import Input from "./Component/Input";
// import { useEffect } from "react";
import useCurrencyInfo from "./Hook/usecurrencyinfo";

function App() {
  let keysofdata = []
  let [from, setfrom] = useState("usd");
  
  let [to, setTo] = useState("pkr");
  let [amount, setamount] = useState(0);
  let [resultedamount, setresultedamount] = useState(0);
  let dataarra = useCurrencyInfo(from);
  console.log(dataarra);

if (dataarra) {
  keysofdata = Object.keys(dataarra);
  console.log(keysofdata);
}
    
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Converter
          </h2>

          {/* Inputs (untouched) */}
          <Input
            label={from}
            amount={amount}
            onamountchange={setamount}
            datakeys={keysofdata}
            oncurrencychange={setfrom}
          />
          <Input
            label={to}
            resultamount={resultedamount}
            onresultamountchange={setresultedamount}
            datakeys={keysofdata}
            disable={true}
            oncurrencychange={setTo}
          />

          {/* Button */}
          <button
            type="button"
            className="w-full py-2.5 mt-2 rounded-xl bg-blue-600 text-white font-medium 
                 hover:bg-blue-700 active:scale-95 transition duration-200 shadow-md"
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
