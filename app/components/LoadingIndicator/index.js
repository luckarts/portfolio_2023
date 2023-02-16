import React from 'react';

import Wrapper from 'components/LoadingIndicator/Wrapper';

const LoadingIndicator = () => (
  <Wrapper className="mh-100 vh-center">
    <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg>
  </Wrapper>
);

export default LoadingIndicator;
