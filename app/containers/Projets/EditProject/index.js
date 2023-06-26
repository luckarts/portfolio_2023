import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchData } from 'utils/fetchData';
import ApiEndpoint from 'utils/api';
import { useParams } from 'react-router-dom';
import { fields } from 'containers/Projets/fields';
import { Form, DataWrapper } from 'components';

const EditProject = () => {
  const { projectName } = useParams();
  const { data, isLoading, error } = useQuery('getProjetName', () =>
    fetchData(ApiEndpoint.getProjectName(projectName))
  );

  const onFinish = async (values) => {
    try {
    } catch (error) {}
  };

  const [prevImage, setImg] = useState();

  const handleOnDrop = (e) => {
    let file = e.target.files[0];
    let value = Object.assign(file, { preview: URL.createObjectURL(file) });
    // data?.project.img = value;
    setImg(value);
    //dispatch(setFormValueAction(project));
  };
  return (
    <DataWrapper data={data?.project} isLoading={isLoading}>
      <Form
        fields={fields}
        defaultValue={data?.project}
        handleOnDrop={handleOnDrop}
        title={'Edit ' + data?.project.title}
        onSubmit={onFinish}
      />
    </DataWrapper>
  );
};

export default EditProject;
