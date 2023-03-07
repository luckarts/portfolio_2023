import React from 'react';
import { useForm } from 'react-hook-form';
import recursiveFields from 'components/Form/recursiveFields';
const Form = ({ title, add, defaultValue, handleOnDrop, onSubmit, fields, addNewListExp }) => {
  const { handleSubmit, control } = useForm();
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 sm:mt-8 mb-16 rounded-xlg  w-3/5 max-w-xlg sm:w-11/12 m-auto border border-gray-300 bg-white p-8"
      >
        {title && <h3 className="text- text-left mb-4">{title}</h3>}
        {recursiveFields(fields, defaultValue, handleOnDrop, control)}
        {add && (
          <button type="button" className="rounded-full" onClick={addNewListExp} control={control}>
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
};

export default Form;
