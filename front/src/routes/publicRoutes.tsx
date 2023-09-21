import PublicRoute from 'components/PublicRoute';
import Projects from 'containers/Projets/index';
import LoginPage from 'containers/LoginPage/';
import NotFound from 'containers/NotFound/';
import Swipeable from 'containers/Swipeable/';
import Profile from 'containers/Resume/';

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
    path: '/notfound',
    element: (
      <PublicRoute>
        <NotFound />
      </PublicRoute>
    )
  }
];
