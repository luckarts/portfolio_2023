import React from 'react';
import PublicRoute from 'components/PublicRoute';
import Projects from 'containers/Projets';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFound from 'containers/NotFound/Loadable';
import Swipeable from 'containers/Swipeable/Loadable';
import Profile from 'containers/Resume/Loadable';

export const publicRoutes = [
  {
    path: '/',
    element: (
      <PublicRoute>
        <Swipeable>
          <Projects />
        </Swipeable>
      </PublicRoute>
    )
  },
  {
    path: '/luc_bachelerie',
    element: (
      <PublicRoute>
        <Swipeable>
          <Profile />
        </Swipeable>
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
    path: '/test',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    )
  },
  {
    path: '/notFounde',
    element: (
      <PublicRoute>
        <NotFound />
      </PublicRoute>
    )
  },
  {
    path: '/*',
    element: (
      <PublicRoute>
        <NotFound />
      </PublicRoute>
    )
  }
];
