import { ColumnDef } from '@tanstack/react-table';
import { ICoinsList } from '@/interface/ICoinsList';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { usdFormat } from '@/utils/usd_format';

export const columns: ColumnDef<ICoinsList>[] = [
  {
    accessorKey: 'top',
    header: () => <div className="ml-4">Top</div>,
    cell: ({ row }) => {
      return <div className="pl-6 font-medium">{row.getValue('top')}</div>;
    },
  },
  {
    accessorKey: 'name',
    header: 'Moeda',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <Avatar className="w-6 h-6">
            <AvatarImage src={row.original.image} />
            <AvatarFallback>{row.getValue('name')}</AvatarFallback>
          </Avatar>
          <div className="font-medium">{row.getValue('name')}</div>
          <div className="font-thin uppercase text-xs">
            {row.original.symbol}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'current_price',
    header: () => <div className="text-right mr-2">Preço</div>,
    cell: ({ row }) => {
      const current_price = parseFloat(row.getValue('current_price'));

      return (
        <div className="text-right font-normal mr-2">
          {usdFormat(current_price)}
        </div>
      );
    },
  },
  {
    accessorKey: 'market_cap',
    header: () => (
      <div className="text-right mr-2">Capitalização de Mercado</div>
    ),
    cell: ({ row }) => {
      const market_cap = parseFloat(row.getValue('market_cap'));

      return (
        <div className="text-right font-normal mr-2">
          {usdFormat(market_cap)}
        </div>
      );
    },
  },
];
