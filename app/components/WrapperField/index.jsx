import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Field from 'components/Field';

const  WrapperField = ({ name, label, type, rules, control, className, variante,defaultValue ,handleOnDrop}) => {
  return (
      <Controller
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <Field
                ref={ref}
                onChange={onChange}
                defaultValue={defaultValue}
                error={error}
                label={label}
                handleOnDrop={handleOnDrop}
                type={type}
                className={className}
                variante={variante}
                name={name}
              />
            )}
            control={control}
            rules={rules}
            name={name}
          />
  );
}


export default WrapperField;