import { useState, useEffect } from "react";

// // CUSTOM TYPE ALLIAS USING UTILITY TYPE
type CurrencyData = {
  date: string;
  [key: string]: Record<string, number> | string;
};

// Hook function
function useCurrencyInfo(currency: string): Record<string, number> {
  const [data, setData] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res: Response) => res.json())
      .then((res: CurrencyData) => setData(res[currency] as Record<string, number>));
  }, [currency]);

  console.log(data);
  
  return data;
}

export default useCurrencyInfo;
