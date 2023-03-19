import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ListExperience from './ListExperiences';
import BannerUser from 'containers/UserPage';
import { Button } from 'components';
import { makeSelectExperiences } from 'containers/Resume/selectors';
import { makeIsLoggedSelector } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import saga from 'containers/Resume/saga';
import reducer from 'containers/Resume/reducer';
import { useDispatch } from 'react-redux';
import { getExperiencesAction } from 'containers/Resume/actions';

import AlertMessage from 'containers/AlertMessage';

const stateSelector = createStructuredSelector({
  stateExperiences: makeSelectExperiences(),
  isLogged: makeIsLoggedSelector()
});
const key = 'resume';
const ResumePage = ({ edit }) => {
  let id, lastIdExp;
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const getResume = () => dispatch(getExperiencesAction());

  const { stateExperiences, isLogged } = useSelector(stateSelector);
  const { experiences } = stateExperiences;
  useEffect(() => {
    getResume();
  }, []);

  id = experiences && experiences.length > 0 && experiences.length;
  lastIdExp = 1;
  return (
    <>
      <Helmet>
        <title>...::: Bachelart.fr :::... Luc Bachelerie</title>
        <meta property="og:title" content="Luc Bachelerie"></meta>
        <meta property="og:url" content="https://bachelart.fr/luc_bachelerie"></meta>
      </Helmet>
      <h1 className="text-primary z-10 text-center animation-FadeUp animation-once afterTitle relative">
        À propos
        <span className="paintBgText"></span>
      </h1>
      <BannerUser />
      {edit && isLogged && (
        <Button variante="link" addIcon href={`/experience/new`} className="link">
          Ajoutez de nouvelles Experiences
        </Button>
      )}
      {!edit && isLogged && (
        <Button variante="link" editIcon href="/edit/experience" className="link">
          Gerer mes experiences
        </Button>
      )}
      <AlertMessage className="m-auto w-1/2 mt-4 max-w-7xl " />

      <ListExperience edit={edit} listExperience={experiences} />
    </>
  );
};

export default ResumePage;
