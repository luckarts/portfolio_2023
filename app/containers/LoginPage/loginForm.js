/**
 *
 * LoginForm
 *
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enterLoginAction, setFormValuesAction, enterValidationErrorAction } from 'containers/LoginPage/actions';
import FormInputWrapper from 'components/FormInputWrapper';
import { Link } from 'react-router-dom';
import AlertMessage from 'containers/AlertMessage';
import { Controller, useForm } from 'react-hook-form';
import { rules } from 'common/rules';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(setFormValuesAction(values));
      dispatch(enterLoginAction());
    } catch (error) {
      dispatch(enterValidationErrorAction({ error: error, type: 'error' }));
    }
  };

  const { handleSubmit, control } = useForm();

  return (
    <form className="form" onSubmit={handleSubmit(onFinish)} name="login-form">
      <AlertMessage />
      <div className="formContainer">
        <h1 className="h1 mb-4 text-title">Connection</h1>
        <div className="formGroup">
          <Controller
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <FormInputWrapper
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
              <FormInputWrapper
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
        <div className="formActions">
          <button className="btn btn-primary rounded-full mb-4" type="submit">
            Submit
          </button>
          <Link className="text-text" to="/register">
            Create your account
          </Link>
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
