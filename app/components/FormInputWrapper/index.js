import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';

const FormInputWrapper = forwardRef((props, ref) => {
  const {
    placeholder,
    label,
    onChange,
    required = false,
    passwordInput = false,
    name,
    type,
    children = null,
    value,
    disabled = false,
    resetClass = false,
    error,
    className,
    defaultValue,
    variante
  } = props;

  useEffect(() => {
    if (error) {
      //dispatch(enqueueAlertAction({ error: error, type: 'error' }));
    }
  }, [error]);
  const isError = error === 'error' ? 'error input' : 'input ';
  return (
    <>
      {label && <label className="label">{label}</label>}
      {variante == 'textarea' ? (
        <textarea
          className={isError + className}
          type={type}
          ref={ref}
          value={value || defaultValue || ''}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      ) : (
        <input
          className={isError + className}
          type={type}
          ref={ref}
          value={value || defaultValue || ''}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </>
  );
});

FormInputWrapper.propTypes = {
  error: PropTypes.object,
  min: PropTypes.number,
  control: PropTypes.object,
  max: PropTypes.number,
  allowClear: PropTypes.bool,
  disabled: PropTypes.bool,
  passwordInput: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  classname: PropTypes.string,
  changeHandler: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

export default FormInputWrapper;
