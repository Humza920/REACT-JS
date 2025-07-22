import { useCallback, useEffect, useState } from "react";
import useCurrencyinfo from "./Hook/useCurrencyinfo";
import Input from "./Components/Input";

const App = () => {
  const [from, setfrom] = useState<string>("usd");
  const [to, setto] = useState<string>("pkr");
  const [amount, setamount] = useState<number | string>(0);
  const [resultamount, setresultamount] = useState<number | string>(0);
  const data: Record<string, number> = useCurrencyinfo(from);
  const keysOfdata: string[] = Object.keys(data);
  console.log(keysOfdata);

useEffect(() => {
  setresultamount((Number(amount) * data[to]).toFixed(2));
  console.log(resultamount);
}
,[amount,to,data])  
  function swap() {
    setfrom(to)
    setto(from)
    setamount(resultamount)
    // setresultamount(amount)
  }
  

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 space-y-6 border border-white/20 hover:border-white/30 transition-all duration-300">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-1">
              Currency Converter
            </h1>
            <p className="text-blue-200/80 text-sm">Convert currencies in real-time</p>
          </div>

          {/* From Currency Input */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-blue-200 block">From</label>
            <Input
              data={keysOfdata}
              label={from}
              amount={amount}
              onAmountchange={setamount}
              isdisable={false}
              onCurrencychange={setfrom}
            />
          </div>

          {/* Swap Button */}
          <div className="flex justify-center -my-2">
            <button
              type="button"
              onClick={swap}
              className="group p-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <svg className="w-4 h-4 text-white group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>

          {/* To Currency Input */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-blue-200 block">To</label>
            <Input
              data={keysOfdata}
              label={to}
              amount={resultamount}
              isdisable={true}
              onCurrencychange={setto}
            />
          </div>

          {/* Convert Button */}
          {/* <button
            type="button"
            onClick={convert}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Convert Currency</span>
            </span>
          </button> */}

          {/* Exchange Rate Info */}
          {data[to] && (
            <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
              <p className="text-blue-200 text-xs">
                1 {from.toUpperCase()} = {data[to]} {to.toUpperCase()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

