import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Button, Typography, Card } from 'components';
import { useQuery } from 'react-query';
import { getProjets } from 'utils/api';
import DataWrapper from 'components/DataWrapper';
const propTypes = {
  editIcon: PropTypes.bool,
  edit: PropTypes.bool,
  isAuthenticated: PropTypes.object,
  addIcon: PropTypes.object,
  href: PropTypes.string,
  title: PropTypes.string
};
const key = 'login';

const ProjectPage = ({ edit = false, isLogged }) => {
  const tags = ['React', 'TDD', 'NextJS', 'MongoDb', 'GraphQL'];
  const [tag, setTag] = useState('');

  const [filterProject, setFilterProject] = useState([]);

  const scrollTop = () => {
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handleClick = (tag) => {
    setTag(tag);
    scrollTop();
  };

  const { data, isLoading, error } = useQuery('getProjets', () => getProjets());

  useEffect(() => {
    console.log(data);
    if (!isLoading) {
      if (tag != '') {
        const filterProject = data.projects.filter((projet) => projet.techno?.split('/').includes(`${tag}`));
        setFilterProject(filterProject);
      } else {
        setFilterProject(data.projects);
      }
    }
  }, [data?.projects, tag]);

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
      <div style={{ minHeight: '500px' }}>
        <div className="max-w-screen-xl flex flex-wrap  mb-4 xs:mb-12 mx-auto md:p-12 sm:p-6 CardsDelay">
          <DataWrapper data={filterProject}>
            <>
              {filterProject?.map((projet, key) => (
                <div
                  className={`md:w-1/2 sm:w-full fadeSlide delay-${key === 0 ? 200 : (key / 5.0) * 1000 + 200}`}
                  key={projet.id}
                >
                  <Card keyID={key} {...projet} edit={edit} />
                </div>
              ))}
            </>
          </DataWrapper>
        </div>
      </div>
    </>
  );
};

ProjectPage.propTypes = propTypes;
export default ProjectPage;
