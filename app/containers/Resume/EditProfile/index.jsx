import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { asyncStartAction, updateExperienceAction, getExperienceByCompanyAction } from 'containers/Resume/actions';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';
import { useDispatch } from 'react-redux';
import { getUserAction } from 'containers/Resume/actions';
import { makeSelectUSer } from 'containers/Resume/selectors';
import { fields } from 'containers/Resume/fields';
import Form from 'components/Form';
import reducer from 'containers/Resume/reducer';

const stateSelector = createStructuredSelector({
  user: makeSelectUSer()
});
const key = 'resume';

const MyProfile = () => {
  let id, lastIdExp;
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });

  const getUser = () => dispatch(getUserAction());

  const { user } = useSelector(stateSelector);
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    console.log(user, 'user');
  }, [user]);
  const onSubmit = (values) => {
    let formdata = new FormData();
    formdata.append('cv', values.cv[0]);
    formdata.append('description', values.description);
    try {
      dispatch(updateExperienceAction(formdata));
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
    <Form fields={fields} defaultValue={user} handleOnDrop={handleOnDrop} title={'Edit User'} onSubmit={onSubmit} />
  );
};

export default MyProfile;
