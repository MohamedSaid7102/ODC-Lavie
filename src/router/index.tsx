import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Componenets
import App from '../App';
import { ErrorPage, Home, Blogs, Blog, Community, Shop } from '@pages/';

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
