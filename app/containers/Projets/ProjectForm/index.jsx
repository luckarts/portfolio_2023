import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Typography, Dropzone, Button, Textarea, Field } from 'components/shared';

const Form = ({ title, loading, onSubmit, initialState, serverErrors }) => {
  const [errorServer, setErrors] = useState({});
  const [newImage, setImg] = useState({});

  useEffect(() => {
    setErrors({ errors: serverErrors });
  }, [serverErrors]);

  const handleOnDrop = (e) => {
    let file = e.target.files[0];
    let value = Object.assign(file, { preview: URL.createObjectURL(file) });

    setImg({ img: value });
  };

  let { register, handleSubmit, errors } = useForm();
  const required = {
    required: 'required',
    minLength: {
      value: 5,
      message: 'min length is 5'
    }
  };
  return (
    <>
      {initialState && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 sm:mt-8 mb-16 rounded-xlg  w-3/5 max-w-xlg sm:w-11/12 m-auto border border-gray-300 bg-white p-8"
        >
          {title && <h3 className="text- text-left mb-4">{title + initialState.title}</h3>}primary
          {initialState.title !== undefined && (
            <Field
              name="title"
              type="text"
              label="Title"
              defaultValue={initialState.title}
              errors={errors.title}
              autoFocus
              error={errorServer.errors && errorServer.errors.title}
              control={{
                ...required
              }}
              ref={register()}
            />
          )}
          {initialState.description !== undefined && (
            <Textarea
              type="text"
              name="description"
              label="Description"
              defaultValue={initialState.description}
              errors={errors.description}
              error={errorServer.errors && errorServer.errors.description}
              ref={register()}
            />
          )}
          {initialState.techno !== undefined && (
            <Field
              type="text"
              name="techno"
              label="Techno"
              defaultValue={initialState.techno}
              error={errorServer.errors && errorServer.errors.techno}
              errors={errors.techno}
              ref={register()}
            />
          )}
          {initialState.position !== undefined && (
            <Field
              type="number"
              name="position"
              label="position"
              defaultValue={initialState.position}
              error={errorServer.errors && errorServer.errors.position}
              errors={errors.position}
              ref={register()}
            />
          )}
          {initialState.linkCode !== undefined && (
            <Field
              type="text"
              name="linkCode"
              label="linkCode"
              defaultValue={initialState.linkCode}
              error={errorServer.errors && errorServer.errors.linkCode}
              errors={errors.linkCode}
              ref={register()}
            />
          )}
          {initialState.linkWebsite !== undefined && (
            <Field
              type="text"
              name="linkWebsite"
              label="linkWebsite"
              defaultValue={initialState.linkWebsite}
              error={errorServer.errors && errorServer.errors.linkWebsite}
              errors={errors.linkWebsite}
              ref={register()}
            />
          )}
          {initialState.img !== undefined && (
            <Dropzone
              type="file"
              name="img"
              ref={register()}
              errors={errors.newImage}
              newImage={newImage ? newImage.img : initialState.img}
              handleOnDrop={handleOnDrop}
            />
          )}
          <div className="flex justify-end">
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

export default Form;
