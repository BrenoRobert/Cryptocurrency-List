import { Route, Routes } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { CoinView } from './pages/CoinView';
import { useSDK } from '@metamask/sdk-react-ui';

export function App() {
  const { ready } = useSDK();

  if (!ready) {
    return <div>Loading...</div>;
  }
  
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/:id/coin" element={<CoinView />} />
    </Routes>
  );
}
