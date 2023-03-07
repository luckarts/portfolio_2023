import React, { Suspense } from 'react';
import PublicRoute from 'containers/PublicRoute';
import PrivateRoute from 'containers/PrivateRoute';

import Projects from 'containers/Projets';
import RegisterPage from 'containers/RegisterPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFound from 'containers/NotFound/Loadable';
import Swipeable from 'containers/Swipeable/Loadable';
import Profile from 'containers/Resume/Loadable';
import EditProject from 'containers/Projets/EditProject';
import NewProject from 'containers/Projets/NewProject';
import NewExperience from 'containers/Resume/NewExperience';
import EditExperience from 'containers/Resume/EditExperience';

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
    path: '/notFound',
    element: (
      <PublicRoute>
        <NotFound />
      </PublicRoute>
    )
  }
];
