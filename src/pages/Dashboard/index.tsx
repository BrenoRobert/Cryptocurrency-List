import { DataList } from '@/components/datalist/index';
import { Header } from '@/components/header';
import { GetCoinsList } from '@/services/request/getCoinsList';

export const Dashboard = () => {
  const { data: coinList, isFetching } = GetCoinsList();

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <div className="mt-10 w-4/5 min-w-[500px] items-center justify-center">
          {isFetching && <p>Carregando</p>}
          {coinList && <DataList data={coinList} />}
        </div>
      </div>
    </>
  );
};
