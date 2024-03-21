import { DataTable } from './data-table';
import { columns } from './columns';
import { ICoinList } from '@/interface/ICoinList';

type DataListProps = {
  data: ICoinList[];
};

export const DataList = ({ data }: DataListProps) => {

  return <DataTable data={data} columns={columns} />;
};
