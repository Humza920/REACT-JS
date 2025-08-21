// import { useState, useEffect } from "react";

const Input = ({
  label,
  amount,
  onamountchange, 
  datakeys,
  resultamount,
  onresultamountchange,
  disable,
  oncurrencychange,
}) => {
console.log(label);

  return (
    <div className="w-full max-w-sm">
      {/* Label */}
      <label
        htmlFor="amount"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <div className="mt-2 flex rounded-2xl shadow-sm border border-gray-300 bg-white/80 focus-within:ring-2 focus-within:ring-blue-500/40">
        {/* Number input */}
        <input
          id="amount"
          value={amount}
          onChange={(e) => {
            onamountchange(e.target.value);
          }}
          type="number"
          step="any"
          min="0"
          placeholder="0.00"
          className="w-full rounded-l-2xl px-4 py-2.5 text-gray-900 placeholder:text-gray-400 outline-none"
        />

        {/* Currency select */}
        <select
          className="rounded-r-2xl border-l border-gray-300 bg-gray-50 px-3 py-2.5 text-gray-700 outline-none focus:bg-white focus:text-gray-900 cursor-pointer"
          value={label}
          onChange={(e)=>{
            oncurrencychange(e.target.value)
          }}
        >
          {datakeys.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>

      {/* Helper text */}
      <p className="mt-2 text-xs text-gray-500">
        Enter amount and select currency
      </p>
    </div>
  );
};

export default Input;
