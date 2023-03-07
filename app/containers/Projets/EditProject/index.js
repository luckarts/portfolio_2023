import React, { useEffect, useState } from 'react';
//import ProjectForm from 'containers/Projets/ProjectForm';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { getProjectAction, updateProjectAction, asyncStartAction } from 'containers/Projets/actions';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeSelectProject } from 'containers/Projets/selectors';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { fields } from 'containers/Projets/fields';
import Form from 'components/Form';
import saga from 'containers/Projets/saga';

const stateSelector = createStructuredSelector({
  project: makeSelectProject()
});
const key = 'editProject';
const EditProject = () => {
  const { projectName } = useParams();
  //useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const getProjectName = () => dispatch(getProjectAction(projectName));
  let { project } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getProjectName();
  }, []);
  const onFinish = async (values) => {
    let formdata = new FormData();
    for (let key in values) {
      if (key === 'img' && values.img) {
        formdata.append('img', values.img[0]);
      } else {
        formdata.append(key, values[key]);
      }
    }
    try {
      dispatch(updateProjectAction(formdata, project?.id));
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
    <Form
      fields={fields}
      defaultValue={project}
      handleOnDrop={handleOnDrop}
      title={'Edit ' + project.title}
      onSubmit={onFinish}
    />
  );
};

export default EditProject;
