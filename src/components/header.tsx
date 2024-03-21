import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from '@/components/ui/separator';

export const Header = () => {
  return (
    <div className="w-screen bg-zinc-900">
      <div className="flex flex-row items-center justify-between px-4 py-3">
        <Link to="/">
          <h1 className="text-lg text-primary uppercase font-mono">
            Criptomoedas
          </h1>
        </Link>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <Separator className="flex" />
    </div>
  );
};
