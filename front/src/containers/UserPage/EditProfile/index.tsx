import { FormEvent } from 'react';
import { fields } from 'containers/UserPage/fields';
import { Form } from 'src/components';
import { FormProvider } from 'src/contexts';
import { rules } from 'src/common/rules';
import { UpdateUserProfile } from 'utils/api';
import { SubmitHandler, FieldValues } from 'react-hook-form';
import { Wrapper_title } from 'src/components';

const MyProfile = () => {
  // @ts-ignore
  const onFinish: SubmitHandler<FieldValues> = async (values: any, e: FormEvent) => {
    try {
      await UpdateUserProfile(values);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnDrop = (e: FormEvent) => {
    // @ts-ignore
    let file = e.target?.files[0];
    // @ts-ignore
    let value = Object.assign(file, { preview: URL.createObjectURL(file) });
  };

  return (
    <>
      <Wrapper_title />
      <FormProvider
        fields={fields}
        rules={rules}
        title={'Edit profiles'}
        handleOnDrop={handleOnDrop}
        onSubmit={onFinish}
      >
        <Form />;
      </FormProvider>
    </>
  );
};

export default MyProfile;
