type Props = {
  label: string;
  amount: string | number;
  isDisabled: boolean;
  currencyoptions:string[];
  selectcurrency:string;
  onAmountchange?: (amount: number) => void;
  onCurrencychange: (currency: string) => void;
};

function Input({
  label,
  amount,
  selectcurrency,
  currencyoptions,
  onAmountchange,
  onCurrencychange,
  isDisabled,
}:Props) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          value={amount}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            onAmountchange && onAmountchange(e.target.value);
          }}
          disabled ={isDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
              onCurrencychange && onCurrencychange(e.target.value);
            }}
            value={selectcurrency}
        >
          {currencyoptions.map((currenc: string) => {
            return<option key={currenc} value={currenc}>{currenc}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Input;
