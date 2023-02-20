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
import { stateSelector } from 'containers/App/selectors';

function PrivateRoute({ children, path, resource, method, defaultPermission }) {
  const { isLogged, user } = useSelector(stateSelector);

  useEffect(() => {
    if (isLogged) {
    }
  }, [user, path]);

  if (isLogged === null) {
    return <LoadingIndicator />;
  }

  return isLogged ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  defaultPermission: PropTypes.bool,
  path: PropTypes.string,
  resource: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default PrivateRoute;
