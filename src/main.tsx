// 3ed parties
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Styles
import '@styles/index.css';
// Componenets
import App from './App';
import { ErrorPage, Home, Blogs, Blog, Community, Shop } from '@pages/';
import { Provider } from 'react-redux';
import { store } from '@redux/store';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      // Singin
      {
        path: '/signin',
        element: <h1>Signin</h1>,
      },
      // Signup
      {
        path: '/signup',
        element: <h1>Signup</h1>,
      },
      // About
      {
        path: '/about',
        element: <div>about</div>,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/blogs:blogId',
        element: <Blog />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/community',
        element: <Community />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

