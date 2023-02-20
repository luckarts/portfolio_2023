import React from 'react';

import HomePage from 'containers/HomePage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';

import { useRoutes } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
];

const RenderRouter = () => useRoutes(routes);

export default RenderRouter;
