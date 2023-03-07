import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ExperienceForm from 'containers/Resume/ExperienceForm';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { asyncStartAction, updateExperienceAction, getExperienceByCompanyAction } from 'containers/Resume/actions';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';
import { useDispatch } from 'react-redux';
import { makeSelectExperience } from 'containers/Resume/selectors';
const stateSelector = createStructuredSelector({
  experience: makeSelectExperience()
});

const UpdateExperience = () => {
  let experiences;
  let { company } = useParams();
  const getExperience = () => dispatch(getExperienceByCompanyAction(company));
  let { experience } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getExperience();
  }, []);

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
    const newExp = [];
    for (let i = 0; i < experiences.list_experience.length; i++) {
      result.list_experience[i] = {
        description: ArrValues[i + 5],
        id: experiences.list_experience[i].id
      };
    }
    const lengthValues = Object.values(experiences).length - 2 + experiences.list_experience.length;
    if (ArrValues.length != Object.values(experiences).length - 2) {
      for (let i = lengthValues; i < ArrValues.length; i++) {
        newExp[i - lengthValues] = {
          description: ArrValues[i],
          id: experiences.id
        };
      }
    }
    try {
      dispatch(updateExperienceAction(result));
      dispatch(asyncStartAction());
    } catch (error) {
      dispatch(enqueueAlertAction({ error: error, type: 'error' }));
    }
  };

  return <ExperienceForm title={'Experience à '} initialState={experience} onSubmit={onSubmit} />;
};
export default UpdateExperience;
