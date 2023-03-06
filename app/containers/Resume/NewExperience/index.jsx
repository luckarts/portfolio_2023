import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ExperienceForm from '../ExperienceForm';
import usePost from 'utils/postData';
import api from 'API/api';

const CreateExperience = () => {
  const { id } = useParams();
  const [values, setSubmitValues] = useState({});
  const [bool, setIsSubmit] = useState(false);

  const createExperience = usePost(api.experience.createExperience, bool, values);
  const [form, setState] = useState({
    year: null,
    date: null,
    job: null,
    company: null,
    link: null,
    list_experience: [{ description: null, id: null }]
  });

  const onSubmit = values => {
    const result = {
      year: values.year,
      date: values.date,
      job: values.job,
      company: values.company,
      link: values.link,
      list_experience: []
    };

    const ArrValues = Object.values(values);

    let j = -1;
    let k = 0;
    for (let i = 5; i < ArrValues.length; i++) {
      j += 1;
      k += 1;
      result.list_experience[j] = {
        description: ArrValues[i],
        id: k
      };
    }

    if (values) {
      setIsSubmit(true);
      setSubmitValues(result);
    }
  };

  return (
    <ExperienceForm
      loading={createExperience.loading}
      setState={setState}
      title={'Nouvelle Experience'}
      initialState={form}
      onSubmit={onSubmit}
    />
  );
};

export default CreateExperience;
