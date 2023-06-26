import React, { useEffect, useState } from 'react';
import { fields } from 'containers/Projets/fields';
import { Form } from 'components';

const NewProject = () => {
  const onSubmit = (values) => {
    let formdata = new FormData();
    for (let key in values) {
      if (key === 'img') {
        formdata.append('img', values.img[0]);
      } else {
        formdata.append(key, values[key]);
      }
    }
    try {
    } catch (error) {}
  };

  const handleOnDrop = (e) => {
    let file = e.target.files[0];
    let value = Object.assign(file, { preview: URL.createObjectURL(file) });
  };

  return <Form fields={fields} handleOnDrop={handleOnDrop} title={'New Project'} onSubmit={onSubmit} />;
};

export default NewProject;
