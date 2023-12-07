import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from '@/shared/styles';
import { setupStore } from '@/shared/redux/store';
import { router } from './appRouter';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);
