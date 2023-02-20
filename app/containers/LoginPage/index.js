/**
 *
 * LoginPage
 *
 */

import React from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/LoginPage/reducer';
import LoginForm from 'containers/LoginPage/loginForm';
import saga from 'containers/LoginPage/saga';

const key = 'login';

export default function LoginPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <div className="m-auto flex">
      <LoginForm />
    </div>
  );
}
