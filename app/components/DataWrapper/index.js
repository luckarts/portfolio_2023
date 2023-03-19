import React, { Children } from 'react';
import { LoadingIndicator } from 'components';
import AlertMessage from 'containers/AlertMessage';
const DataWrapper = ({ data, children, isLoading, error }) => {
  if (isLoading) {
    return <LoadingIndicator />;
  }
  <AlertMessage />;

  if (data) {
    return <>{Children.only(children)}</>;
  }
};
export default DataWrapper;
