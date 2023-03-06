import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({ className, variante, href, children }) => {
  return (
    <>
      {variante === 'h1' ? (
        <h1 className={className}>{children}</h1>
      ) : variante === 'h2' ? (
        <h2 className={className}>{children}</h2>
      ) : (
        variante === 'h3' && <h3 className={className}>{children}</h3>
      )}
    </>
  );
};

const propTypes = {
  children: PropTypes.node,
  variante: PropTypes.string,
  custom: PropTypes.bool,
  className: PropTypes.string
};

Typography.propTypes = propTypes;
export default Typography;
