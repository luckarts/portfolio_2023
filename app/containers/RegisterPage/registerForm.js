/**
 *
 * RegisterForm
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { enterRegisterAction, setFormValuesAction } from 'containers/RegisterPage/actions';

import FormInputWrapper from 'components/FormInputWrapper';
import FormButtonWrapper from 'components/FormButtonWrapper';
import AlertMessage from 'containers/AlertMessage';
import { rules } from 'common/rules';
import { useForm, Controller } from 'react-hook-form';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';
import { Link } from 'react-router-dom';

function RegisterForm({}) {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(setFormValuesAction(values));
      dispatch(enterRegisterAction());
    } catch (error) {
      dispatch(enqueueAlertAction({ error: error, type: 'error' }));
    }
  };

  const { handleSubmit, control } = useForm();
  return (
    <form className="form" onSubmit={handleSubmit(onFinish)} name="register-form">
      <AlertMessage />
      <div className="formContainer">
        <h1 className="h1 mb-4 text-title">Create your account</h1>
        <div className="formGroup">
          <Controller
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error }, formState }) => (
              <FormInputWrapper
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
