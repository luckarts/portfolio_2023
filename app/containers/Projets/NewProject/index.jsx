import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { getProjectAction, newProjectAction, asyncStartAction } from 'containers/Projets/actions';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';
import { useDispatch } from 'react-redux';
import { makeSelectProject } from 'containers/Projets/selectors';
import { fields } from 'containers/Projets/fields';
import { Form } from 'components';
import saga from 'containers/Projets/saga';

const stateSelector = createStructuredSelector({
  formValues: makeSelectProject()
});

const NewProject = () => {
  let { formValues } = useSelector(stateSelector);
  const dispatch = useDispatch();

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
      dispatch(newProjectAction(values));
      dispatch(asyncStartAction());
    } catch (error) {
      dispatch(enqueueAlertAction({ error: error, type: 'error' }));
    }
  };

  const [newImage, setImg] = useState({});

  const handleOnDrop = (e) => {
    let file = e.target.files[0];
    let value = Object.assign(file, { preview: URL.createObjectURL(file) });
    setImg({ img: value });
  };

  return (
    <Form
      fields={fields}
      defaultValue={formValues}
      handleOnDrop={handleOnDrop}
      title={'New Project'}
      onSubmit={onSubmit}
    />
  );
};

export default NewProject;
