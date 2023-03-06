import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ExperienceForm from '../ExperienceForm';
import usePost from 'utils/postData';
import fetchData from 'utils/fetchData';
import api from 'API/api';

const UpdateExperience = () => {
  let experiences;
  let { company } = useParams();

  const [values, setSubmitValues] = useState(null);
  const [newExperience, setNewExperience] = useState({});
  const [bool, setIsSubmit] = useState(false);
  const [boolExperience, setIsSubmitExperience] = useState(false);
  const getExperiences = fetchData(api.experience.getExperience, company);

  experiences = getExperiences.data ? getExperiences.data.listExperiences : {};
  const updateProject = usePost(api.experience.updateExperience, bool, {
    id: experiences && experiences.id,
    experience: values
  });

  const newExperiences = usePost(api.experience.createListExperience, boolExperience, {
    id: experiences && experiences.id,
    newExperiences: newExperience
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
      setNewExperience(newExp);
      setIsSubmitExperience(true);
    }
    if (values) {
      setSubmitValues(result);
      setIsSubmit(true);
    }
  };

  return (
    <ExperienceForm
      loading={updateProject.loading}
      title={'Experience à '}
      initialState={experiences}
      onSubmit={onSubmit}
    />
  );
};
export default UpdateExperience;
