import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ExperienceForm from '../ExperienceForm';
import { useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { asyncStartAction, updateExperienceAction, getExperienceByCompanyAction } from 'containers/Resume/actions';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';
import { makeSelectExperience } from 'containers/Resume/selectors';
import { fields } from 'containers/Resume/fieldsExperiences';
import Form from 'components/Form';
const stateSelector = createStructuredSelector({
  formValues: makeSelectExperience()
});
const CreateExperience = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  let { formValues } = useSelector(stateSelector);

  const onSubmit = (values) => {
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
      try {
        dispatch(updateExperienceAction(values));
        dispatch(asyncStartAction());
      } catch (error) {
        dispatch(enqueueAlertAction({ error: error, type: 'error' }));
      }
    }
  };

  return <Form fields={fields} add={true} defaultValue={formValues} title={'Add Experience'} onSubmit={onSubmit} />;
};

export default CreateExperience;
