/**
 *
 * LoginForm
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { enterLoginAction, setFormValuesAction, enterValidationErrorAction } from 'containers/LoginPage/actions';
import AlertMessage from 'containers/AlertMessage';
import { Controller, useForm } from 'react-hook-form';
import { rules } from 'common/rules';
import Form from 'components/Form';

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
  const fields = [
    {
      name: 'email',
      label: 'Email',
      type: 'text'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password'
    }
  ];

  return <Form fields={fields} title={'Login'} onSubmit={onFinish} />;
};
export default LoginForm;
