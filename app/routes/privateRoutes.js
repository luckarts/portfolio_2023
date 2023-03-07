import React from 'react';
import PrivateRoute from 'containers/PrivateRoute';
import Projects from 'containers/Projets';
import Profile from 'containers/Resume/Loadable';
import MyProfile from 'containers/Resume/EditProfile';
import EditProject from 'containers/Projets/EditProject';
import NewProject from 'containers/Projets/NewProject';
import NewExperience from 'containers/Resume/NewExperience';
import EditExperience from 'containers/Resume/EditExperience';

export const privateRoutes = [
  {
    path: '/projectName',
    element: (
      <PrivateRoute>
        <EditProject />
      </PrivateRoute>
    )
  },
  {
    path: '/edit/projects',
    element: (
      <PrivateRoute>
        <Projects edit={true} />
      </PrivateRoute>
    )
  },
  {
    path: '/new',
    element: (
      <PrivateRoute>
        <NewProject />
      </PrivateRoute>
    )
  },
  {
    path: '/edit/experience/:company',
    element: (
      <PrivateRoute>
        <EditExperience />
      </PrivateRoute>
    )
  },
  {
    path: '/edit/experience',
    element: (
      <PrivateRoute>
        <Profile edit={true} />
      </PrivateRoute>
    )
  },
  {
    path: '/experience/new',
    element: (
      <PrivateRoute>
        <NewExperience />
      </PrivateRoute>
    )
  },

  {
    path: '/editProfile',
    element: (
      <PrivateRoute>
        <MyProfile />
      </PrivateRoute>
    )
  }
];
