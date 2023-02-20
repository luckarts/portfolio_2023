/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import RenderRouter from 'routes';
import { getProfileAction } from 'containers/App/actions';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/App/reducer';
import { useInjectSaga } from 'utils/injectSaga';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import saga from 'containers/App/saga';
import Header from 'components/Header';
const key = 'global';
export default function App() {
  const dispatch = useDispatch();
  const getLoggedInUserProfile = () => dispatch(getProfileAction());
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getLoggedInUserProfile();
  }, []);
  return (
    <div data-theme="dark">
      <Helmet titleTemplate="%s - Boileurplate">
        <meta name="description" content="Truthy CMS" />
      </Helmet>
      <BrowserRouter>
        <Header />

        <RenderRouter />
      </BrowserRouter>
    </div>
  );
}
