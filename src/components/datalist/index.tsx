import { DataTable } from './data-table';
import { columns } from './columns';
import { ICoin } from '@/interface/ICoinsList';

type DataListProps = {
  data: ICoin[];
};

export const DataList = ({ data }: DataListProps) => {
  return <DataTable data={data} columns={columns} />;
};
