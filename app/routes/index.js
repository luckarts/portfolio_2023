import React from 'react';

import HomePage from 'containers/HomePage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';

import { useRoutes } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
];

const RenderRouter = () => useRoutes(routes);

export default RenderRouter;
