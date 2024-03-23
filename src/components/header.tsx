import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { MetaMaskButton, useAccount } from '@metamask/sdk-react-ui';

import { CheckCircledIcon } from '@radix-ui/react-icons';

export const Header = () => {
  const { isConnected } = useAccount();

  return (
    <div className="w-screen bg-zinc-900">
      <div className="flex flex-row items-center justify-between px-4 py-3">
        <Link to="/" className="flex flex-grow">
          <h1 className="text-lg text-primary uppercase font-mono">
            Criptomoedas
          </h1>
        </Link>
        {isConnected && (
          <CheckCircledIcon className="h-6 w-6 text-green-700 mr-4" />
        )}
        <MetaMaskButton theme={'light'} color="white" />
      </div>
      <Separator className="flex" />
    </div>
  );
};
