import { ICoin } from "@/interface/ICoin";
import { coinGecko } from "@/services/api";
import { useQuery } from "react-query";

type id = string | undefined

export function GetCoin(id: id) {
  return useQuery<ICoin>('coin', async () => {
    const { data }: { data: ICoin } = await coinGecko.get(`coins/${id}`
    );

    return data;
  });
}