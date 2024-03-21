import { ColumnDef } from '@tanstack/react-table';
import { ICoinList } from '@/interface/ICoinList';
import { Button } from '../ui/button';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const columns: ColumnDef<ICoinList>[] = [
  {
    accessorKey: 'top',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Top
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(current_price);

      return <div className="text-right font-normal mr-2">{formatted}</div>;
    },
  },
  {
    accessorKey: 'market_cap',
    header: () => (
      <div className="text-right mr-2">Capitalização de Mercado</div>
    ),
    cell: ({ row }) => {
      const market_cap = parseFloat(row.getValue('market_cap'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(market_cap);

      return <div className="text-right font-normal mr-2">{formatted}</div>;
    },
  },
];