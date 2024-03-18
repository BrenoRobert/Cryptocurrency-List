import { Header } from '../../components/header';
import { List } from '../../components/list';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center ">
        <div className="pt-20 w-4/5 min-[400px]: items-center justify-center">
          <List />
        </div>
      </div>
    </>
  );
};
