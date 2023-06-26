/**
 *
 * Public Route
 *
 */

import React, { useEffect } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import PropTypes from 'prop-types';

function PublicRoute({ children }) {
  return children;
}

PublicRoute.propTypes = {
  children: PropTypes.node
};

export default PublicRoute;
