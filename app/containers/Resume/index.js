import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import BannerProfile from './BannerProfile';
import ListExperience from './ListExperiences';
import { CustomLink } from 'components';
import { makeSelectExperiences, makeSelectUSer } from 'containers/Resume/selectors';
import { makeIsLoggedSelector } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import saga from 'containers/Resume/saga';
import reducer from 'containers/Resume/reducer';
import { useDispatch } from 'react-redux';
import { getExperiencesAction, getUserAction } from 'containers/Resume/actions';
import AlertMessage from 'containers/AlertMessage';

const stateSelector = createStructuredSelector({
  user: makeSelectUSer(),
  experiences: makeSelectExperiences(),
  isLogged: makeIsLoggedSelector()
});
const key = 'resume';
const ResumePage = ({ edit }) => {
  let id, lastIdExp;
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const getResume = () => dispatch(getExperiencesAction());
  const getUser = () => dispatch(getUserAction());

  const { experiences, user, isLogged } = useSelector(stateSelector);
  useEffect(() => {
    getResume();
    getUser();
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
      <BannerProfile user={user} />

      {!edit && isLogged && (
        <CustomLink editIcon variante="link" href="/edit/profile">
          Gerer mon profil
        </CustomLink>
      )}

      {user.description && (
        <div className="w-3/5 sm:w-11/12 m-auto animation-FadeUp animation-once delay-1000">
          <h3 className="pt-2">Information</h3>
          <div className="flex justify-between">
            <img className="resumeSvg text-center m-auto" src="/img/experiences.png" />

            <p className="pt-2 ">{parse(user.description)}</p>
          </div>
        </div>
      )}
      {edit && isLogged && (
        <CustomLink variante="link" addIcon href={`/experience/new`}>
          Ajoutez de nouvelles Experiences
        </CustomLink>
      )}
      {!edit && isLogged && (
        <CustomLink variante="link" editIcon href="/edit/experience">
          Gerer mes experiences
        </CustomLink>
      )}
      <AlertMessage className="m-auto w-1/2 mt-4 max-w-7xl " />

      <ListExperience edit={edit} listExperience={experiences} />
    </>
  );
};

export default ResumePage;
