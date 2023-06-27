import React, { forwardRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NotificationContext } from 'containers/Notification/NotificationContext';

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

  const isError = error?.type === 'patern' || error?.type === 'required' ? 'input error' : 'input';
  const { notifications, setNotifications } = useContext(NotificationContext);
  useEffect(() => {
    if (error) {
      //  setNotifications((notifications) => [...notifications, error]);
    }
  }, [error]);
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
      {error?.message && <span className="block text-red-700 sm:inline mb-4">{error.message}</span>}
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
