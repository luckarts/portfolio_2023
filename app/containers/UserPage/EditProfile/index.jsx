import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { asyncStartAction, getUserAction } from 'containers/UserPage/actions';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';
import { useDispatch } from 'react-redux';
import { makeSelectUSer, makeSelectUSerLoading } from 'containers/UserPage/selectors';
import { fields } from 'containers/UserPage/fields';
import reducer from 'containers/Resume/reducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Form, DataWrapper } from 'components';

const stateSelector = createStructuredSelector({
  user: makeSelectUSer(),
  isLoading: makeSelectUSerLoading()
});
const key = 'resume';

const MyProfile = () => {
  let id, lastIdExp;
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  const getUser = () => dispatch(getUserAction());
  const { user, isLoading } = useSelector(stateSelector);

  useEffect(() => {
    getUser();
  }, []);

  const onSubmit = (values) => {
    try {
      // dispatch(updateExperienceAction(values));
      dispatch(asyncStartAction());
    } catch (error) {
      dispatch(enqueueAlertAction({ error: error, type: 'error' }));
    }
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
