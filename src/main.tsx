import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import { App } from './App.tsx';
import { queryClient } from './services/queryClients.ts';
import { ThemeProvider } from '@material-tailwind/react';
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <MetaMaskUIProvider
              sdkOptions={{
                dappMetadata: {
                  name: 'Wallet Metamask',
                  url: window.location.href,
                }
              }}
            >
              <App />
            </MetaMaskUIProvider>
          </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
