import { ICoinMarketChart } from "@/interface/ICoinMarketChart";
import { coinGecko } from "@/services/api";
import { useQuery } from "react-query";

type id = string | undefined

export function GetCoinMarketChart(id: id) {
  return useQuery<ICoinMarketChart>('coinMarketChart', async () => {
    const { data }: { data: ICoinMarketChart } = await coinGecko.get(`coins/${id}/market_chart?vs_currency=usd&days=1`
    );

    return data;
  })
}