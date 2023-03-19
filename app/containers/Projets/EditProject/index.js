import React, { useEffect, useState } from 'react';
//import ProjectForm from 'containers/Projets/ProjectForm';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import {
  getProjectAction,
  updateProjectAction,
  asyncStartAction,
  setFormValueAction
} from 'containers/Projets/actions';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeSelectProject, makeSelectState } from 'containers/Projets/selectors';
import { useInjectSaga } from 'utils/injectSaga';
import { fields } from 'containers/Projets/fields';
import { Form, DataWrapper } from 'components';
import saga from 'containers/Projets/saga';

const stateSelector = createStructuredSelector({
  isLoading: makeSelectState(),
  project: makeSelectProject()
});
const key = 'editProject';
const EditProject = () => {
  const { projectName } = useParams();
  useInjectSaga({ key, saga });
  const getProjectName = () => dispatch(getProjectAction(projectName));
  let { project, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getProjectName();
    dispatch(asyncStartAction());
  }, []);

  const onFinish = async (values) => {
    try {
      dispatch(updateProjectAction(values, project?.id));
      dispatch(asyncStartAction());
    } catch (error) {
      dispatch(enqueueAlertAction({ error: error, type: 'error' }));
    }
  };

  const [prevImage, setImg] = useState();

  const handleOnDrop = (e) => {
    let file = e.target.files[0];
    let value = Object.assign(file, { preview: URL.createObjectURL(file) });
    project.img = value;
    setImg(value);
    dispatch(setFormValueAction(project));
  };
  return (
    <DataWrapper data={project} isLoading={isLoading}>
      <Form
        fields={fields}
        defaultValue={project}
        handleOnDrop={handleOnDrop}
        title={'Edit ' + project.title}
        onSubmit={onFinish}
      />
    </DataWrapper>
  );
};

export default EditProject;
