import { useState, useEffect } from "react";
import Input from "./Component/Input";
import useCurrencyInfo from "./Hook/usecurrencyinfo";

function App() {
  let keysofdata = [];
  let [from, setfrom] = useState("usd");

  let [to, setTo] = useState("pkr");
  let [secondto , setsecondto] = useState("inr")
  let [amount, setamount] = useState(0);
  let [resultedamount, setresultedamount] = useState(0);
  let [secresultedamount, setsecresultedamount] = useState(0);

  let dataarra = useCurrencyInfo(from);
  console.log(dataarra);

  if (dataarra) {
    keysofdata = Object.keys(dataarra);
  }
  useEffect(() => {
    if (dataarra[to]) {
      let calculate = amount * dataarra[to];
      setresultedamount(calculate);
    }
    if (dataarra[secondto]) {
      let calculate = amount * dataarra[secondto];
      setsecresultedamount(calculate);
    }

  }, [amount]);

  return (
<>
  <div 
    className="flex justify-center items-center min-h-screen bg-cover bg-center relative" 
    style={{ backgroundImage: "url('https://wallpaperaccess.com/full/1137443.jpg')" }}
  >
    {/* Overlay for readability (no blur now) */}
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="relative w-full max-w-md bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-gray-100">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-800 tracking-tight">
        💱 Currency Converter
      </h2>

      {/* Inputs */}
      <div className="flex flex-col gap-4">
        <Input
          label={from}
          amount={amount}
          onamountchange={setamount}
          datakeys={keysofdata}
          oncurrencychange={setfrom}
          disable={false}
        />

        {/* Helper text */}
        <p className="mt-1 text-xs text-gray-700 font-medium text-center">
          Enter amount and select currency
        </p>

        <Input
          label={to}
          amount={resultedamount}
          datakeys={keysofdata}
          disable={true}
          oncurrencychange={setTo}
        />
        <Input
          label={secondto}
          amount={secresultedamount}
          datakeys={keysofdata}
          disable={true}
          oncurrencychange={setsecondto}
        />
      </div>
    </div>
  </div>
</>


  );
}

export default App;
