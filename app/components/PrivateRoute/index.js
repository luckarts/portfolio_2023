/**
 *
 * Private Route
 *
 */

import LoadingIndicator from 'components/LoadingIndicator';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { makeIsLoggedSelector } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';

const stateSelector = createStructuredSelector({
  isLogged: makeIsLoggedSelector()
});

function PrivateRoute({ children, path }) {
  const { isLogged } = useSelector(stateSelector);

  useEffect(() => {
    if (isLogged) {
    }
  }, [isLogged, path]);

  if (isLogged === null) {
    return <LoadingIndicator />;
  }

  return children;
}

PrivateRoute.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node
};

export default PrivateRoute;
