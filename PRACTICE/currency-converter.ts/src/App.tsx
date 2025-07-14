import usecurrencyinfo from "./Hooks/usecurrencyinfo";
import { useState } from "react";
import Input from "./Components/Input";

const App = () => {
  const [amount, setamount] = useState<number | string>(0);
  const [from, setfrom] = useState<string>("usd");
  const [to, setto] = useState<string>("pkr");
  const [resultamount, setresultamount] = useState<number | string>(0);
  const currencyInfo = usecurrencyinfo(from);
  const currencyarr: any = Object.keys(currencyInfo);

function swap (){
  setfrom(to)
  setto(from)
  setresultamount(amount)
  setamount(resultamount)
}

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${`url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyoptions={currencyarr}
                selectcurrency={from}
                onAmountchange={(amount: number) => {
                  setamount(amount);
                }}
                onCurrencychange={(currency: string) => {
                  setfrom(currency);
                }}
                isDisabled={false}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={resultamount}
                currencyoptions={currencyarr}
                selectcurrency={to}

                onCurrencychange={(currency: string) => {
                  setfrom(currency);
                }}
                isDisabled={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
