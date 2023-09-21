/**
 *
 * LoginPage
 *
 */

import Form from 'components/Form';
import { rules } from 'src/common/rules';
import { postLogin } from 'utils/api';
import { useNavigate } from 'react-router-dom';
import { useI18n, FormProvider, useNotification } from 'src/contexts';
import { SubmitHandler, FieldValues } from 'react-hook-form';
import { Wrapper_title } from 'src/components';
export type LoginValues = {
  username: string;
  password: string;
};

const fields = [
  {
    name: 'username',
    label: 'username',
    type: 'text'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password'
  }
];
interface UserResponse {
  token: string;
}
const LoginPage = () => {
  const { setNotifications } = useNotification();
  const { language } = useI18n();
  const navigate = useNavigate();

  const onFinish: SubmitHandler<FieldValues> = async (values, e?) => {
    if (e) e.preventDefault();
    try {
      const response = (await postLogin(values)) as UserResponse;
      localStorage.setItem('token', response.token);
      navigate(`/${language}/`);
      setNotifications([{ type: 'success', message: 'you are logged' }]);
    } catch (error) {
      setNotifications((prevNotifications: any) => [...prevNotifications, error]);
    }
  };

  return (
    <>
      <Wrapper_title />
      <div className="m-auto flex">
        <FormProvider fields={fields} rules={rules} title={'Login'} onSubmit={onFinish}>
          <Form />;
        </FormProvider>
      </div>
    </>
  );
};
export default LoginPage;
