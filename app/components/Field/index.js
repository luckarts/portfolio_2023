import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';
//Field
const Field = (props) => {
  const {
    placeholder,
    label,
    onChange,
    passwordInput = false,
    name,
    type,
    rules,
    children = null,
    disabled = false,
    error,
    className = '',

    defaultValue,
    handleOnDrop,
    register,
    variante
  } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      // dispatch(enqueueAlertAction({ ...error, type: 'error' }));
    }
  }, [error]);
  const isError = error === 'error' ? 'error input' : 'input ';
  return (
    <>
      {label && <label className="label">{label}</label>}
      {type == 'file' ? (
        <input
          className={isError + className}
          type={type}
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(name, rules)}
          disabled={disabled}
        />
      ) : variante == 'textarea' ? (
        <textarea
          className={isError + className}
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(name, rules)}
          disabled={disabled}
        />
      ) : (
        <input
          className={isError + className}
          type={type}
          name={name}
          {...register(name, rules)}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </>
  );
};

Field.propTypes = {
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

export default Field;
