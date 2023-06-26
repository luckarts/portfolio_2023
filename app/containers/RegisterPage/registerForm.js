/**
 *
 * RegisterForm
 *
 */

import React, { useEffect } from 'react';

import Field from 'components/Field';
import FormButtonWrapper from 'components/FormButtonWrapper';
import { rules } from 'common/rules';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

function RegisterForm({}) {
  const onFinish = async (values) => {
    try {
    } catch (error) {}
  };

  const { handleSubmit, control } = useForm();
  return (
    <form className="form" onSubmit={handleSubmit(onFinish)} name="register-form">
      <div className="formContainer">
        <h1 className="h1 mb-4 text-title">Create your account</h1>
        <div className="formGroup">
          <Controller
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error }, formState }) => (
              <Field
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                value={value}
                ref={ref}
                error={error}
                type="text"
                label={'username'}
              />
            )}
            control={control}
            rules={rules.username}
            name="username"
          />
        </div>
        <div className="formGroup">
          <Controller
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <Field
                ref={ref}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                value={value}
                error={error}
                label={'email'}
                type="email"
              />
            )}
            control={control}
            rules={rules.email}
            name="email"
          />
        </div>
        <div className="formGroup">
          <Controller
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <Field
                ref={ref}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                value={value}
                label={'password'}
                type="password"
                error={error}
              />
            )}
            control={control}
            rules={rules.password}
            name="password"
          />
        </div>
      </div>
      <div className="formActions">
        <FormButtonWrapper className="btn btn-primary rounded-full mb-4" type="submit" label="submit" />
        <Link className="text-text" to="/login">
          to Login
        </Link>
      </div>
    </form>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
