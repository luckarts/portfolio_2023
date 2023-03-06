import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UserForm } from 'components/shared';
import { createRequestArtwork } from 'store/galeriePhoto/actions';
import usePost from 'utils/postData';
import api from 'API/api';
const NewArtwork = ({ createRequestArtwork }) => {
  const [form, setState] = useState({
    img: [],
    category: null,
    link: null
  });
  const [values, setSubmitValues] = useState(null);
  const [bool, setIsSubmit] = useState(false);

  const updateProject = usePost(api.artworks.createArtwork, bool, values);
  const onSubmit = values => {
    let formdata = new FormData();
    formdata.append('img', values.img[0]);
    formdata.append('category', values.category);
    formdata.append('link', values.link);
    setIsSubmit(true);
    setSubmitValues(formdata);
  };

  return (
    <UserForm
      title={'Nouveau Artwork'}
      loading={updateProject.loading}
      initialState={form}
      setState={setState}
      onSubmit={onSubmit}
    />
  );
};

export default connect(null, { createRequestArtwork })(NewArtwork);
