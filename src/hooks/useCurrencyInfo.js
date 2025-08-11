import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Failed to fetch data: ${res.status}`);
            }
            return res.json();
        })
        .then((res) => setData(res[currency]))
        .catch((err) => {
            console.error('Currency fetch error:', err);
            setData({}); // Optional: clear data on error
        });
}, [currency]);
    return data;

}

export default useCurrencyInfo;