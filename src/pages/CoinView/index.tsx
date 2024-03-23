import { Cards } from '@/components/cards';
import { CustomChart } from '@/components/custom-chart';
import { Header } from '@/components/header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GetCoin } from '@/services/request/getCoin';
import { GetCoinMarketChart } from '@/services/request/getCoinMarketChart';
import { CaretLeftIcon } from '@radix-ui/react-icons';
import { Link, useParams } from 'react-router-dom';

export const CoinView = () => {
  const { id } = useParams();

  const { data: coin, isFetching: isFetchingCoin } = GetCoin(id);
  const { data: coinMarketChart, isFetching: isFetchingCoinMarket } =
    GetCoinMarketChart(id);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <div className="mt-10 w-4/5 min-w-[500px] items-center justify-center">
          {isFetchingCoin && <p>Carregando</p>}
          {coin && !isFetchingCoin && (
            <div>
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-3">
                  <Link
                    to="/"
                    className="outline outline-1 rounded-full p-1 hover:text-primary"
                  >
                    <CaretLeftIcon width={16} height={16} />
                  </Link>
                  <div className="font-semibold text-2xl">{coin.name}</div>
                  <div className="text-sm font-thin pt-1">
                    #{coin.market_cap_rank}
                  </div>
                </div>
                <Avatar className="w-10 h-10 border-2 p-1">
                  <AvatarImage
                    src={coin.image.small}
                    className="rounded-full"
                  />
                  <AvatarFallback className="uppercase text-sm">
                    {coin.symbol}
                  </AvatarFallback>
                </Avatar>
              </div>

              <Cards coin={coin?.market_data} />
            </div>
          )}

          <div className="mt-10">
            <div className="py-6 text-lg font-medium">
              Variação de preço nas últimas 24h
            </div>
            {coinMarketChart && (
              <CustomChart data={coinMarketChart.prices.flat()} />
            )}
            {isFetchingCoinMarket && <p>Carregando</p>}
          </div>
        </div>
      </div>
    </>
  );
};
