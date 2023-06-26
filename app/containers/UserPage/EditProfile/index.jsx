import React, { useEffect, useState } from 'react';
import { fields } from 'containers/UserPage/fields';
import { Form, DataWrapper } from 'components';

const key = 'resume';

const MyProfile = () => {
  let id, lastIdExp;
  // const { user, isLoading } = useSelector(stateSelector);

  const onSubmit = (values) => {
    try {
    } catch (error) {}
  };

  const handleOnDrop = (e) => {
    let file = e.target.files[0];
    let value = Object.assign(file, { preview: URL.createObjectURL(file) });
  };

  return (
    <DataWrapper data={user} isLoading={isLoading}>
      <Form fields={fields} defaultValue={user} handleOnDrop={handleOnDrop} title={'Edit User '} onSubmit={onSubmit} />
    </DataWrapper>
  );
};

export default MyProfile;
