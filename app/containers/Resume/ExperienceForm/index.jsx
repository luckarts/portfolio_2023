import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { WrapperField } from 'components';

const ExperienceForm = ({ title, onSubmit, loading, initialState, serverErrors }) => {
  const [newListExp, setnewListExp] = useState([]);

  const addNewListExp = () => {
    setnewListExp([...newListExp, 1]);
  };

  let { handleSubmit, control } = useForm();
  return (
    <>
      {initialState && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 sm:mt-8 mb-16 rounded-xlg  w-3/5 max-w-xlg sm:w-11/12 m-auto border border-gray-300 bg-white p-8"
        >
          {title && <h3 className="text-primary text-left mb-4">{title + initialState.company}</h3>}
          {initialState.year !== undefined && <WrapperField name="year" type="text" label="Year" control={control} />}
          {initialState.date !== undefined && <WrapperField name="date" type="text" label="date" control={control} />}
          {initialState.job !== undefined && <WrapperField name="job" type="text" label="job" />}
          {initialState.company !== undefined && (
            <WrapperField type="text" name="company" label="societé" control={control} />
          )}

          {initialState.link !== undefined && (
            <WrapperField type="text" name="link" label="lien company" control={control} />
          )}

          <button
            loading={loading}
            type="button"
            primary
            hover
            large
            secondary
            className="rounded-full"
            onClick={addNewListExp}
            control={control}
          >
            <span> Add</span>
          </button>

          <div className="flex justify-center">
            <button loading={loading} type="submit" primary hover large secondary className="rounded-full">
              {loading && <div className="spinner" />}
              <span> Valider</span>
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExperienceForm;
