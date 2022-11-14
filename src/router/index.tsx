import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Componenets
import App from '../App';
import {
  ErrorPage,
  Home,
  Blogs,
  Blog,
  Community,
  Shop,
  Signin,
  Signup,
} from '@pages/';
import { AboutUs, AuthWrapper } from '@components/';

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
        element: (
          <AuthWrapper>
            <Signin />
          </AuthWrapper>
        ),
      },
      // Signup
      {
        path: '/signup',
        element: (
          <AuthWrapper>
            <Signup />
          </AuthWrapper>
        ),
      },
      // About
      {
        path: '/about',
        element: <AboutUs />,
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
      {
        path: '/password-reset',
        element: <h1>Reset Your Password goese here</h1>,
      },
    ],
  },
]);
