import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import FormInputWrapper from 'components/FormInputWrapper';

const WrapperField = ({ name, label, type, rules, control, className, variante, defaultValue }) => {
  return (
    <Controller
      render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
        <FormInputWrapper
          ref={ref}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={value}
          defaultValue={defaultValue}
          error={error}
          label={label}
          type={type}
          className={className}
          variante={variante}
        />
      )}
      control={control}
      rules={rules}
      name={name}
    />
  );
};
const propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  rules: PropTypes.object,
  type: PropTypes.string,
  error: PropTypes.string,
  variante: PropTypes.string
};

WrapperField.propTypes = propTypes;
export default WrapperField;
