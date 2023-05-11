import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import About from './routes/about';
import OurAnimals from './routes/ourAnimals';
import AddAnimals from './routes/add';
import News from './routes/news';
import Donations from './routes/donations';
import {ProSidebarProvider} from 'react-pro-sidebar';
import Contacts from './routes/contacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <About />,
      },
      {
        path: '/ourAnimals/',
        element: <OurAnimals />,
      },
      {
        path: '/add/',
        element: <AddAnimals />,
      },
      {
        path: '/news/',
        element: <News />,
      },
      {
        path: '/donations/',
        element: <Donations />,
      },
      {
        path: '/contacts/',
        element: <Contacts />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  </React.StrictMode>,
);
