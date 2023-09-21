import recursiveFields from 'components/Form/recursiveFields';
import { Typography } from 'src/components';
//import ReCAPTCHA from 'react-google-recaptcha';
//import Notification from '../../contexts/Notification/index';
import { useCustomForm } from 'src/contexts';

export default function Form() {
  const { defaultValue, handleSubmit, onSubmit: contextOnSubmit, title, fields, addFields } = useCustomForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(contextOnSubmit)}
        className="mt-12 sm:mt-8 mb-16 rounded-xlg  w-3/5 max-w-xlg sm:w-11/12 m-auto border border-gray-300 bg-white p-8"
      >
        {title && (
          <Typography variante={'h1'} className="text-left mb-4">
            {title}
          </Typography>
        )}
        {recursiveFields(defaultValue ? defaultValue : {}, fields)}
        {addFields && (
          <button type="button" className="rounded-full" onClick={() => addFields()}>
            <span> Add</span>
          </button>
        )}
        <div className="flex justify-end">
          <button className="btn btn-primary rounded-full mb-4" type="submit">
            <span> Valider</span>
          </button>
        </div>
      </form>
    </>
  );
}
