/**
 *
 * Private Route
 *
 */

import LoadingIndicator from 'components/LoadingIndicator';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
//import { AdminContext } from 'containers/';

function PrivateRoute({ children, path }) {
  /*
  useEffect(() => {
    if (isLogged) {
    }
  }, [isLogged, path]);

  if (isLogged === null) {
    return <LoadingIndicator />;
  }
*/
  return children;
}

PrivateRoute.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node
};

export default PrivateRoute;
