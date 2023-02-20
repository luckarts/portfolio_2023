/**
 *
 * Register Page
 *
 */
import React from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import RegisterForm from 'containers/RegisterPage/registerForm';
import reducer from 'containers/RegisterPage/reducer';
import saga from 'containers/RegisterPage/saga';

export default function RegisterPage() {
  const key = 'register';

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <div className="flex m-auto">
      <RegisterForm />
    </div>
  );
}
