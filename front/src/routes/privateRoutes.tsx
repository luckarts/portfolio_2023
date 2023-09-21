import PrivateRoute from 'components/PrivateRoute';
import Profile from 'containers/Resume/';
import MyProfile from 'containers/UserPage/EditProfile';
import NewProject from 'containers/Projets/NewProject/';
import EditExperience from 'containers/Resume/';
import EditProjects from 'containers/Projets/EditProjects';

export const privateRoutes = [
  {
    path: '/edit/project',
    element: (
      <PrivateRoute>
        <EditProjects />
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
    path: '/edit/experienceCompany',
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
        <Profile />
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
