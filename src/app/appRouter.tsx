import { createBrowserRouter } from 'react-router-dom';
import { PATH } from '@/shared/router/path';
import { MainPage } from '@/pages/MainPage';
import { Layout } from "./layout/Layout";

export const router = createBrowserRouter([
  {
    element: < Layout/>,
    children: [
      {
        path: PATH.root,
        element: <MainPage/>,
      },
    ],
  },
]);