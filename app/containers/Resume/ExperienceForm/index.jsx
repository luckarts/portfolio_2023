import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Typography, Field, Textarea, Button } from 'components/shared';

const ExperienceForm = ({ title, onSubmit, loading, initialState, serverErrors }) => {
  const [errorServer, setErrors] = useState({});
  const [newListExp, setnewListExp] = useState([]);

  useEffect(() => {
    setErrors({ errors: serverErrors });
  }, [serverErrors]);

  const addNewListExp = () => {
    setnewListExp([...newListExp, 1]);
  };
  const required = {
    required: 'required',
    minLength: {
      value: 5,
      message: 'min length is 5'
    }
  };
  let { register, handleSubmit, errors } = useForm();
  return (
    <>
      {initialState && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 sm:mt-8 mb-16 rounded-xlg  w-3/5 max-w-xlg sm:w-11/12 m-auto border border-gray-300 bg-white p-8"
        >
          {title && <h3 className="text-primary text-left mb-4">{title + initialState.company}</h3>}
          {initialState.year !== undefined && (
            <Field
              name="year"
              type="text"
              label="Year"
              defaultValue={initialState.year}
              errors={errors.year}
              autoFocus
              error={errorServer.year && errorServer.errors.year}
              ref={register()}
            />
          )}
          {initialState.date !== undefined && (
            <Field
              name="date"
              type="text"
              label="date"
              defaultValue={initialState.date}
              errors={errors.date}
              autoFocus
              error={errorServer.errors && errorServer.errors.date}
              register={register}
              ref={register({ ...required })}
            />
          )}
          {initialState.job !== undefined && (
            <Field
              name="job"
              type="text"
              label="job"
              defaultValue={initialState.job}
              errors={errors.job}
              autoFocus
              error={errorServer.errors && errorServer.errors.job}
              ref={register()}
            />
          )}
          {initialState.company !== undefined && (
            <Field
              type="text"
              name="company"
              label="societé"
              defaultValue={initialState.company}
              errors={errors.description}
              error={errorServer.errors && errorServer.errors.company}
              ref={register({ ...required })}
            />
          )}

          {initialState.link !== undefined && (
            <Field
              type="text"
              name="link"
              label="lien company"
              defaultValue={initialState.link}
              error={errorServer.errors && errorServer.errors.link}
              errors={errors.link}
              ref={register()}
            />
          )}

          {initialState.list_experience &&
            initialState.list_experience.map((field, index) => (
              <div key={index}>
                <Textarea
                  type="text"
                  name={'description' + index}
                  label={'detail experiences'}
                  defaultValue={field.description}
                  error={errorServer.errors && errorServer.errors.description}
                  errors={errors.link}
                  ref={register()}
                />
              </div>
            ))}
          {newListExp &&
            newListExp.map((obj, index) => (
              <div key={index}>
                <Textarea
                  type="text"
                  name={'newDescription' + index}
                  label={'detail experiences'}
                  error={errorServer.errors && errorServer.errors.newDescription}
                  errors={errors.link}
                  defaultValue={obj.description}
                  ref={register()}
                />
              </div>
            ))}
          <Button
            loading={loading}
            type="button"
            primary
            hover
            large
            secondary
            className="rounded-full"
            onClick={addNewListExp}
          >
            <span> Add</span>
          </Button>

          <div className="flex justify-center">
            <Button loading={loading} type="submit" primary hover large secondary className="rounded-full">
              {loading && <div className="spinner" />}
              <span> Valider</span>
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExperienceForm;
