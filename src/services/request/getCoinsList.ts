import { ICoinList } from "@/interface/ICoinList";
import { coinGecko } from "@/services/api";
import { useQuery } from "react-query";

type VsCurrency = "usd" | "eur" | "jpy"

export function GetCoinsList(options: VsCurrency = "usd") {
  return useQuery<ICoinList[]>('coinList', async () => {
    const { data }: { data: ICoinList[] } = await coinGecko.get(`coins/markets?vs_currency=${options}&market_cap_desc`
    );

    // recupero as top 10 moedas e reronto com mais atributo de posição no ranking
    return data.slice(0, 10).map((coin, index) => {
      return { ...coin, top: index + 1 }
    });
  },
    {
      staleTime: 1000 * 60, // 1 minuto
      refetchOnWindowFocus: false, //remover quando finalizado o projeto
    }
  );

} 