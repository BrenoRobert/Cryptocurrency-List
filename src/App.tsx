import { Route, Routes } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { CoinView } from './pages/CoinView';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/:id/coin" element={<CoinView />} />
    </Routes>
  );
}
