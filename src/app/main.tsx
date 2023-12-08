import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { GlobalStyles } from '@/shared/styles';
import { setupStore } from '@/shared/redux/store';
import { Layout } from './layout/Layout';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <GlobalStyles />
      <Layout/>
    </ReduxProvider>
  </React.StrictMode>
);
