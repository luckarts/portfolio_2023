import { useAdmin } from './useAdmin';

/**
 * Restrict access to children to authenticated users.
 * Redirects anonymous users to the login page.
 *
 * Use it to decorate your custom page components to require
 * authentication.
 *
 * By default this component is optimistic: it does not block
 * rendering children when checking authentication, but this mode
 * can be turned off by setting `requireAuth` to true.
 *
 * You can set additional `authParams` at will if your authProvider
 * requires it.
 *
 * @see useAuthState
 *
 * @example
 *     import { Admin, CustomRoutes, Authenticated } from 'react-admin';
 *
 *     const customRoutes = [
 *         <Route
 *             path="/foo"
 *             element={
 *                 <Authenticated authParams={{ foo: 'bar' }}>
 *                     <Foo />
 *                 </Authenticated>
 *             }
 *         />
 *     ];
 *
 *     const App = () => (
 *         <Admin>
 *             <CustomRoutes>{customRoutes}</CustomRoutes>
 *         </Admin>
 *     );
 *
 */
export const Authenticated = ({ children, adminLabel, userLabel }: AuthenticatedProps) => {
  // this hook will log out if the authProvider doesn't validate that the user is authenticated
  const { isAdmin } = useAdmin();

  // in pessimistic mode don't render the children until authenticated
  const label = isAdmin ? adminLabel : userLabel;

  // Passez le label comme prop au composant children
  if (adminLabel || userLabel) return label;

  if (!isAdmin) return null;

  // render the children in optimistic rendering or after authenticated

  return children;
};

export interface AuthenticatedProps {
  children?: any;
  adminLabel?: string;
  userLabel?: string;
}
