import { useEffect, useState } from "react";

type Data = {
  date: string;
  [key: string]: Record<string, number> | string;
};

function useCurrencyinfo(currency: string): Record<string, number> {
  const [data, setdata] = useState<Record<string, number>>({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res : Response) => res.json())
      .then((res : Data) => setdata(res[currency] as Record<string , number>));
  }, [currency]);
  
  return data;
}

export default useCurrencyinfo