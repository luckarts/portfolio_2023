import React from 'react';

import HomePage from 'containers/HomePage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import PublicRoute from 'containers/PublicRoute';
import PrivateRoute from 'containers/PrivateRoute';

import { useRoutes } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: (
      <PublicRoute>
        <HomePage />
      </PublicRoute>
    )
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    )
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    )
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    )
  }
];

const RenderRouter = () => useRoutes(routes);

export default RenderRouter;
