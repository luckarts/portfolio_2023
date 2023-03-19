import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import recursiveFields from 'components/Form/recursiveFields';
import { Typography } from 'components';
import ReCAPTCHA from 'react-google-recaptcha';
import ApiEndpoint from 'utils/api';
import { AlertMessage } from 'containers';
export default function Form({
  title,
  rules,
  defaultValue,
  variante = 'h1',
  handleOnDrop,
  onSubmit,
  fields,
  addNewListExp
}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <>
      <AlertMessage />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 sm:mt-8 mb-16 rounded-xlg  w-3/5 max-w-xlg sm:w-11/12 m-auto border border-gray-300 bg-white p-8"
      >
        {title && (
          <Typography variante={variante} className="text-left mb-4">
            {title}
          </Typography>
        )}
        {recursiveFields(fields, register, defaultValue, handleOnDrop, rules, errors)}
        {addNewListExp && (
          <button type="button" className="rounded-full" onClick={() => addNewListExp()}>
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
