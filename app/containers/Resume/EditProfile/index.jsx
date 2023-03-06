import React, { useState } from 'react';
import { UserForm } from 'components/shared';
import usePost from 'utils/postData';
import fetchData from 'utils/fetchData';
import api from 'API/api';

const MyProfile = () => {
  const [values, setSubmitValues] = useState({});
  const [bool, setIsSubmit] = useState(false);
  const userPublicData = fetchData(api.userPublic.getUser);

  const updateUser = usePost(api.user.update, bool, values);

  const onSubmit = values => {
    console.log(values);
    let formdata = new FormData();
    formdata.append('cv', values.cv[0]);
    formdata.append('description', values.description);
    setIsSubmit(true);
    setSubmitValues(formdata);
  };

  return (
    <UserForm
      title={'Edit profile'}
      loading={updateUser.loading}
      initialState={userPublicData && userPublicData.data.user}
      onSubmit={onSubmit}
      pdf
    />
  );
};

export default MyProfile;
