// import { useState, useEffect } from "react";

const Input = ({
  label,
  amount,
  onamountchange, 
  datakeys,
  disable,
  oncurrencychange,
}) => {

  return (
<div className="w-full max-w-sm">
  {/* Label */}
  <label
    htmlFor="amount"
    className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide"
  >
    {label}
  </label>

  <div className="flex rounded-2xl shadow-md border border-gray-200 bg-white/80 backdrop-blur-sm 
                  focus-within:ring-2 focus-within:ring-indigo-400/70 hover:shadow-lg transition-all duration-300">
    
    {/* Number input */}
    <input
      id="amount"
      value={amount}
      onChange={(e) => {
        onamountchange(e.target.value);
      }}
      disabled={disable}
      type="number"
      step="any"
      min="0"
      placeholder="0.00"
      className="w-full rounded-l-2xl px-4 py-3 text-gray-900 
                 placeholder:text-gray-400/70 focus:outline-none focus:ring-0 
                 bg-transparent font-medium text-base transition-all duration-200 disabled:cursor-not-allowed"
    />

    {/* Currency select */}
    <select
      className="rounded-r-2xl border-l border-gray-200 bg-gray-50/70 px-4 py-3 
                 text-gray-800 font-medium outline-none cursor-pointer 
                 hover:bg-gray-100 focus:bg-white focus:text-gray-900 
                 transition-all duration-300"
      value={label}
      onChange={(e) => {
        oncurrencychange(e.target.value);
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
</div>

  );
};

export default Input;
