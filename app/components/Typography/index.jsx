import React from 'react';
import PropTypes from 'prop-types';

export default function Typography({ className, variante, children }) {
  return (
    <>
      {variante === 'h1' ? (
        <h1 className={className}>{children}</h1>
      ) : variante === 'h2' ? (
        <h2 className={className}>{children}</h2>
      ) : variante === 'h3' ? (
        <h3 className={className}>{children}</h3>
      ) : variante === 'h4' ? (
        <h4 className={className}>{children}</h4>
      ) : (
        <p className={className}>{children}</p>
      )}
    </>
  );
}

const propTypes = {
  children: PropTypes.node,
  variante: PropTypes.string,
  custom: PropTypes.bool,
  className: PropTypes.string
};

Typography.propTypes = propTypes;
