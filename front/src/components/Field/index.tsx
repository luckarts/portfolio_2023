import React, { ReactNode, useEffect, useState } from 'react';
import { useCustomForm } from '../../contexts';
import { FieldErrorsImpl } from 'react-hook-form';
import { RulesType } from 'src/common/rules/type';

interface FieldProps {
  placeholder?: string;
  label?: string;
  passwordInput?: boolean;
  name: string;
  type?: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string | undefined;
  defaultValue?: string;
  handleOnDrop?: (event: React.DragEvent<HTMLInputElement>) => void;
  variante?: 'textarea';
}

type FieldError = {
  type: string;
  message?: string;
  ref?: React.RefObject<any>;
};

type Merge<T, U> = T & U;

type ErrorType = FieldError | Merge<FieldError, FieldErrorsImpl<any>>;

//Field
const Field = (props: FieldProps) => {
  const { placeholder, label, name, type, disabled = false, className = '', defaultValue, variante, ...rest } = props;

  // Destructure the onChange from register
  const { register, errors, rules } = useCustomForm();
  const [error, setError] = useState<ErrorType | undefined>();
  const [rule, setRules] = useState<RulesType | undefined>();
  const [errorClass, setErrorClass] = useState<string>('input');

  useEffect(() => {
    if (errors && errors?.[name]) setError(errors[name] as ErrorType);
    if (rules && (rules[name] as RulesType)) setRules(rules[name] as RulesType);
    if (errors?.[name]?.type === 'pattern' || errors?.[name]?.type === 'required') setErrorClass('input error');
  }, [errors, rules]);
  return (
    <>
      {label && <label className="label">{label}</label>}
      {type == 'file' ? (
        <input
          className={errorClass + className}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name, rule)}
          {...rest}
        />
      ) : variante == 'textarea' ? (
        <textarea
          className={errorClass + className}
          placeholder={placeholder}
          {...register(name, rule)}
          disabled={disabled}
          {...rest}
        />
      ) : (
        <input
          className={errorClass + className}
          type={type}
          {...rest}
          {...register(name, rule)}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
      {error?.message && <span className="block text-red-700 sm:inline mb-4">{error?.message}</span>}
    </>
  );
};

export default Field;
