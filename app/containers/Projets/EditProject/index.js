import React, { useState } from 'react';
import ProjectForm from '../ProjectForm';
import { useParams } from 'react-router-dom';
import usePost from 'utils/postData';
import fetchData from 'utils/fetchData';
import api from 'API/api';

const EditProject = () => {
  let projects;
  const { projectName } = useParams();

  const [values, setSubmitValues] = useState(null);

  const [bool, setIsSubmit] = useState(false);
  const getProject = fetchData(api.project.getProject, projectName);

  projects = getProject.data ? getProject.data.projects : {};
  const updateProject = usePost(api.project.updateProject, bool, {
    id: projects && projects.id,
    formdata: values
  });

  const onSubmit = values => {
    let formdata = new FormData();

    for (let key in values) {
      if (key === 'img') {
        formdata.append('img', values.img[0]);
      } else {
        formdata.append(key, values[key]);
      }
    }
    setSubmitValues(formdata);
    setIsSubmit(true);
  };

  return (
    <ProjectForm
      title={'Edit '}
      initialState={getProject.data.projects}
      onSubmit={onSubmit}
      serverErrors={updateProject.error}
      loading={updateProject.loading}
    />
  );
};

export default EditProject;
