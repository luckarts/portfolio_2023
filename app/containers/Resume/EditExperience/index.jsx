import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { asyncStartAction, updateExperienceAction, getExperienceByCompanyAction } from 'containers/Resume/actions';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';
import { useDispatch } from 'react-redux';
import { makeSelectExperience, makeSelectExperiences } from 'containers/Resume/selectors';
import { Form, DataWrapper } from 'components';
import { fields } from 'containers/Resume/fields';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/Resume/saga';

const key = 'editExperience';

const stateSelector = createStructuredSelector({
  formValue: makeSelectExperience(),
  stateExperiences: makeSelectExperiences()
});

const UpdateExperience = () => {
  let { company } = useParams();
  useInjectSaga({ key, saga });
  const getExperience = () => dispatch(getExperienceByCompanyAction(company));
  let { formValue, stateExperiences } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [updateFields, setFields] = useState(fields);
  const [experience, setExperience] = useState(formValue);
  const [countExperience, setCountExperience] = useState(0);

  const addNewListExp = () => {
    setCountExperience(countExperience + 1);
    setFields((prevList) => [
      ...prevList,
      {
        data_name: 'description',
        name: `description_${countExperience}`,
        label: `description_${countExperience}`,
        type: 'text'
      }
    ]);
  };

  useEffect(() => {
    if (stateExperiences.experiences.length > 0) {
      const experience = stateExperiences.experiences.filter((experience) => experience.company === company)[0];
      setExperience(experience);
      addList_experience(experience);
    } else {
      getExperience();
    }
  }, []);

  useEffect(() => {
    if (formValue && Object.keys(formValue).length !== 0) {
      addList_experience(formValue);
      setExperience(formValue);
    }
  }, [formValue]);

  const addList_experience = (experience) => {
    if (experience.list_experience && updateFields.length == 5) {
      setCountExperience(experience.list_experience.length);
      let array = [];
      experience.list_experience.forEach(function (key, i) {
        array = [
          ...array,
          { data_name: 'description', name: `description_${i}`, label: `experience_${i}`, type: 'text' }
        ];
      });
      setFields((prevList) => [...prevList, { name: 'list_experience', type: array }]);
    }
  };
  const onFinish = (values) => {
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
    for (let i = 0; i < experience.list_experience.length; i++) {
      result.list_experience[i] = {
        description: ArrValues[i + 5],
        id: experience.list_experience[i].id
      };
    }
    const lengthValues = Object.values(experience).length - 2 + experience.list_experience.length;
    if (ArrValues.length != Object.values(experience).length - 2) {
      for (let i = lengthValues; i < ArrValues.length; i++) {
        newExp[i - lengthValues] = {
          description: ArrValues[i],
          id: experience.id
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

  return (
    <>
      <DataWrapper data={experience} isLoading={stateExperiences.isLoading}>
        <Form
          fields={updateFields}
          defaultValue={experience}
          title={'Edit Experience ' + company}
          addNewListExp={addNewListExp}
          onSubmit={onFinish}
        />
      </DataWrapper>
    </>
  );
};
export default UpdateExperience;
