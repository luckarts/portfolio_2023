/**
 *
 * Public Route
 *
 */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeIsLoggedSelector } from 'containers/App/selectors';
import LoadingIndicator from 'components/LoadingIndicator';
import PropTypes from 'prop-types';

const stateSelector = createStructuredSelector({
  isLogged: makeIsLoggedSelector()
});

function PublicRoute({ children }) {
  const navigate = useNavigate();
  const { isLogged } = useSelector(stateSelector);

  if (isLogged === null) {
    return <LoadingIndicator />;
  }
  return children;
}

PublicRoute.propTypes = {
  children: PropTypes.node
};

export default PublicRoute;
