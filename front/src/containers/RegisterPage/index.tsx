/**
 *
 * Register Page
 *
 */
import Form from 'components/Form';
import { rules } from 'src/common/rules';
import { RegisterUser } from 'utils/api';
import { useNavigate } from 'react-router-dom';
import { useI18n, FormProvider } from 'src/contexts';
import { SubmitHandler, FieldValues } from 'react-hook-form';
import { Wrapper_title } from 'src/components';

const fields = [
  {
    name: 'username',
    label: 'username',
    type: 'text'
  },
  {
    name: 'email',
    label: 'email',
    type: 'email'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password'
  }
];

export default function RegisterPage() {
  const { language } = useI18n();
  const navigate = useNavigate();

  const onFinish: SubmitHandler<FieldValues> = async (values, e) => {
    if (e) e.preventDefault();
    try {
      await RegisterUser(values);
      navigate(`/${language}/`);
      // setNotifications([{ type: 'succès', message: 'you are logged' }]);
    } catch (error) {
      console.log(error);
      //setNotifications((prevNotifications: any) => [...prevNotifications, error]);
    }
  };

  return (
    <>
      <Wrapper_title />
      <div className="flex m-auto">
        <FormProvider fields={fields} rules={rules} title={'Register'} onSubmit={onFinish}>
          <Form />;
        </FormProvider>
      </div>
    </>
  );
}
