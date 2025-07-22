type Props = {
  data: string[];
  label: string;
  amount: number | string;
  onAmountchange?: (amount: number | string) => void;
  onCurrencychange: (currency: string) => void;
  isdisable: boolean;
};

const Input = ({
  data,
  label,
  amount,
  onAmountchange,
  onCurrencychange,
  isdisable
}: Props) => {

  return (
    <div className="w-full bg-white/10 backdrop-blur-xl rounded-lg shadow-lg p-4 border border-white/20 hover:border-white/30 transition-all duration-300">
      <div className="flex items-center gap-3">
        {/* Amount Input */}
        <div className="flex-1">
          <input
            type="number"
            value={amount}
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "E" ||
                e.key === "+" ||
                e.key === "-"
              ) {
                e.preventDefault();
              }
            }}
            onChange={(e) =>
              onAmountchange && onAmountchange(e.target.value)
            }
            disabled={isdisable}
            placeholder="0.00"
            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 outline-none transition-all duration-300 text-white placeholder-blue-200/50 text-lg font-semibold backdrop-blur-sm disabled:bg-white/5 disabled:text-blue-200/50 disabled:cursor-not-allowed hover:border-white/40"
          />
        </div>

        {/* Currency Select */}
        <div className="relative">
          <select
            value={label}
            onChange={(e) => onCurrencychange(e.target.value)}
            className="px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 outline-none cursor-pointer text-white font-semibold backdrop-blur-sm hover:border-white/40 transition-all duration-300 capitalize appearance-none pr-8 min-w-[80px]"
          >
            {data.map((currenc: string) => {
              return (
                <option key={currenc} value={currenc} className="capitalize bg-slate-800 text-white cursor-pointer">
                  {currenc}
                </option>
              );
            })}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            <svg className="w-3 h-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;