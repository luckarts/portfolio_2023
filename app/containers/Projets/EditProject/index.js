import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fields } from 'containers/Projets/fields';
import { Form, DataWrapper } from 'components';
import { getProjetByName } from 'utils/api';

const EditProject = () => {
  const { projectName } = useParams();
  const { data, isLoading, error } = useQuery('getProjetName', () => getProjetByName(projectName));

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
