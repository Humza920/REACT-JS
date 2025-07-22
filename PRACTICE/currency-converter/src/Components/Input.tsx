

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
    <div className="w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-md p-6 mb-2 border border-[#2563eb]/10 transition-all duration-300">
      <div className="space-y-2">
        <label className="block text-base font-semibold text-[#2563eb] mb-1 tracking-wide">
          Amount
        </label>
        <div className="relative flex items-center gap-2">
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
            placeholder="Enter amount"
            className="w-full px-4 py-3 border border-[#2563eb]/30 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] outline-none transition-all duration-200 text-[#0f172a] placeholder-[#64748b] bg-[#f8fafc] shadow-sm disabled:bg-[#e2e8f0] disabled:text-[#64748b] text-lg font-medium"
          />
          <select
            value={label}
            onChange={(e) => onCurrencychange(e.target.value)}
            className="ml-2 border border-[#2563eb]/30 rounded-xl px-4 py-2 text-base bg-[#f1f5f9] focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] outline-none cursor-pointer shadow-sm font-semibold text-[#2563eb] hover:bg-[#e0e7ef] transition-all duration-200 capitalize"
          >
            {data.map((currenc: string) => {
              return (
                <option key={currenc} value={currenc} className="capitalize">
                  {currenc}
                </option>
              );
            })}
          </select>
        </div>
        <p className="text-xs text-[#2563eb] mt-1 font-medium tracking-wide">
          Selected currency: <span className="uppercase">{label}</span>
        </p>
      </div>
    </div>
  );
};

export default Input;
