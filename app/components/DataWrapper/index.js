import React, { Children } from 'react';
import { LoadingIndicator } from 'components';
const DataWrapper = ({ data, children, isLoading, error }) => {
  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (data) {
    return <>{Children.only(children)}</>;
  }
};
export default DataWrapper;
