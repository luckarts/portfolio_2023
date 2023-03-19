import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Field from 'components/Field';

const  WrapperField = ({ name, label, type, rules, control, className, variante, onChange,defaultValue }) => {
  return (
    <Controller
      render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
        <Field
          ref={ref}
          onChange={(e) => onChange(e.target.value)
          }
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
}


export default WrapperField;