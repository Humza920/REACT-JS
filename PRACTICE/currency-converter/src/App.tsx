import { useCallback, useState } from "react";
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

  const convert = useCallback(() => {
    setresultamount(Math.ceil(Number(amount) * data[to]));
    console.log(resultamount);
  }, [amount,to]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#2563eb]">
      <div className="w-full max-w-lg bg-[#1e293b]/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 space-y-10 border border-[#2563eb]/30 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#2563eb] to-[#a21caf] text-center drop-shadow-lg tracking-tight mb-8">Currency Converter</h1>
        <Input
          data={keysOfdata}
          label={from}
          amount={amount}
          onAmountchange={setamount}
          isdisable={false}
          onCurrencychange={setfrom}
        />
        <div className="flex justify-center">
          <button
            type="button"
            onClick={convert}
            className="mt-4 px-10 py-3 bg-[#2563eb] text-white font-semibold rounded-xl shadow-sm border border-[#2563eb]/40 hover:bg-[#1e40af] hover:border-[#1e40af] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:ring-offset-2 text-base tracking-wide"
          >
            CONVERT
          </button>
        </div>
        <Input
          data={keysOfdata}
          label={to}
          amount={resultamount}
          isdisable={true}
          onCurrencychange={setto}
        />
      </div>
      <footer className="mt-10 text-[#38bdf8] text-xs text-center font-semibold tracking-wide drop-shadow-sm bg-[#0f172a]/80 px-4 py-2 rounded-xl shadow backdrop-blur-sm border border-[#2563eb]/30">Made with <span className="text-[#facc15]">★</span> by Currency Converter</footer>
    </div>
  );
};

export default App;
