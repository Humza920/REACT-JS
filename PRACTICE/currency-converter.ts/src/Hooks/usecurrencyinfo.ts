import { useState, useEffect } from "react";

// CUSTOM TYPE ALLIAS USING UTILITY TYPE
type currencyData = {
  date: string;
  usd: Record<string, number>;
};

function usecurrencyinfo(currency: string): currencyData {
  const [data, setdata] = useState<currencyData>({
    date: "",
    usd: {},
  });

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res: Response) => res.json())
      .then((res: currencyData) => setdata(data));
  }, [currency]);

  return data
}
