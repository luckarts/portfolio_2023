import { ChangeEvent } from 'react';
import { fields } from 'containers/Projets/fields';
import { Form } from 'src/components';
import { FormProvider } from 'src/contexts';
import { Wrapper_title } from 'src/components';
import { createProjet } from 'utils/api';
import { SubmitHandler, FieldValues } from 'react-hook-form';

const NewProject = () => {
  //const [filePreview, setFilePreview] = useState<string | null>(null);

  const onFinish: SubmitHandler<FieldValues> = async (values) => {
    try {
      await createProjet(values);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnDrop = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Check if the input is of type file
    if (event.target.type === 'file') {
      let fileInput = event.target as HTMLInputElement;
      let file = fileInput.files ? fileInput.files[0] : null;

      if (file) {
        // @ts-ignore
        let value = Object.assign(file, { preview: URL.createObjectURL(file) });
        //setFilePreview(value.preview);
        // You can now use the filePreview state variable to display the preview or use the file elsewhere
      }
    }
  };

  return (
    <>
      <Wrapper_title />
      <FormProvider fields={fields} title={'New Project'} handleOnDrop={handleOnDrop} onSubmit={onFinish}>
        <Form />;
      </FormProvider>
    </>
  );
};

export default NewProject;
