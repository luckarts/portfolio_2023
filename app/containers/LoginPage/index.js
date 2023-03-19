/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/LoginPage/reducer';
import saga from 'containers/LoginPage/saga';
import Form from 'components/Form';
import { useDispatch } from 'react-redux';
import { enterLoginAction, setFormValuesAction } from 'containers/LoginPage/actions';
import { rules } from 'common/rules';

const key = 'login';

const LoginPage = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    dispatch(setFormValuesAction(values));
    dispatch(enterLoginAction());
  };
  const fields = [
    {
      name: 'username',
      label: 'Email',
      type: 'text'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password'
    }
  ];

  return (
    <div className="m-auto flex">
      <Form fields={fields} rules={rules} title={'Login'} onSubmit={onFinish} />;
    </div>
  );
};
export default LoginPage;
