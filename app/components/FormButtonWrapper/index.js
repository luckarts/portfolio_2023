import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * FormButtonWrapper
 *
 */

const FormButtonWrapper = (props) => {
  const { label, icon, intl, type, show = true, className, disabled, form } = props;
  return (
    <>
      {show ? (
        <button type={type} className={className}>
          {label}
        </button>
      ) : (
        ''
      )}
    </>
  );
};

FormButtonWrapper.propTypes = {
  form: PropTypes.object,
  icon: PropTypes.object,
  disabled: PropTypes.bool,
  show: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string
};

export default FormButtonWrapper;
