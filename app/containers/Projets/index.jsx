import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardProject from './CardProject';
import { Helmet } from 'react-helmet';
import { makeSelectProjects } from 'containers/Projets/selectors';
import { makeIsLoggedSelector } from 'containers/App/selectors';
import { Button, Typography } from 'components';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { getProjectsAction } from 'containers/Projets/actions';
import { useDispatch } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import saga from 'containers/Projets/saga';
import reducer from 'containers/Projets/reducer';
import AlertMessage from 'containers/AlertMessage';

const propTypes = {
  editIcon: PropTypes.bool,
  edit: PropTypes.bool,
  isAuthenticated: PropTypes.object,
  addIcon: PropTypes.object,
  href: PropTypes.string,
  title: PropTypes.string
};
const key = 'login';

const stateSelector = createStructuredSelector({
  isLogged: makeIsLoggedSelector(),
  projects: makeSelectProjects()
});

const ProjectPage = ({ edit = false }) => {
  const tags = ['React', 'TDD', 'NextJS', 'MongoDb', 'GraphQL'];
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const getProjects = () => dispatch(getProjectsAction());

  let { projects, isLogged } = useSelector(stateSelector);
  const [filterProject, setFilterProject] = useState([]);

  const scrollTop = () => {
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handleClick = (tag) => {
    setTag(tag);
    scrollTop();
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (tag != '') {
      const filterProject = projects.filter((projet) => projet.techno?.split('/').includes(`${tag}`));
      setFilterProject(filterProject);
    } else {
      setFilterProject(projects);
    }
  }, [projects, tag]);

  return (
    <>
      <Helmet>
        <title>BachelArt</title>
        <meta property="og:title" content="BachelArt"></meta>
        <meta property="og:url" content="https://bachelart.fr"></meta>
        <meta name="description" content="Projets / React / PHP / Angular" />
      </Helmet>
      <Typography
        variante="h2"
        className="text-center z-10 relative text-primary afterTitle animation-FadeUp animation-once"
      >
        {edit ? ' Edit projets' : 'Mes projets'} <span className="paintBgText "></span>
      </Typography>

      {edit && isLogged && (
        <Button variante="link" addIcon className="addIcon link" href="/new">
          Ajout d'un nouveau projet
        </Button>
      )}
      {!edit && isLogged && (
        <Button variante="link" editIcon className="editIcon link" href="/edit/projects">
          Gerer mes projets
        </Button>
      )}
      <div className="text-center pt-6 ">
        <Button
          className={`sizeTag ${tag === '' ? 'tag' : 'text-primary'} + 'animation-FadeUp animation-once `}
          onClick={() => handleClick('')}
        >
          <span>All</span>
        </Button>
        {tags.length > 0 &&
          tags.map((tagg, key) => (
            <Button
              key={key}
              className={`sizeTag ${tagg === tag ? 'tag' : 'text-primary'}
              fadeSlide delay-${key === 0 ? 200 : (key / 5.0) * 1000 + 200}`}
              onClick={() => handleClick(tagg)}
            >
              <span>{tagg}</span>
            </Button>
          ))}
      </div>
      <AlertMessage className="m-auto w-1/2 mt-4 max-w-7xl" />
      <div style={{ minHeight: '500px' }}>
        <div className="max-w-screen-xl flex flex-wrap  mb-4 xs:mb-12 mx-auto md:p-12 sm:p-6 CardsDelay">
          {filterProject?.map((projet, key) => (
            <div
              className={`md:w-1/2 sm:w-full fadeSlide delay-${key === 0 ? 200 : (key / 5.0) * 1000 + 200}`}
              key={projet.id}
            >
              <CardProject keyID={key} {...projet} edit={edit} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

ProjectPage.propTypes = propTypes;
export default ProjectPage;
