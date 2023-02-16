import React from 'react';

import HomePage from 'containers/HomePage/Loadable';

import { useRoutes } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <HomePage />
  }
];

const RenderRouter = () => useRoutes(routes);

export default RenderRouter;
