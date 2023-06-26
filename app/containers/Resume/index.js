import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ListExperience from './ListExperiences';
import BannerUser from 'containers/UserPage';
import { Button } from 'components';
import { useQuery } from 'react-query';
import { fetchData } from 'utils/fetchData';
import ApiEndpoint from 'utils/api';
import DataWrapper from 'components/DataWrapper';

const key = 'resume';
const ResumePage = ({ edit, isLogged }) => {
  let id, lastIdExp;

  useEffect(() => {
    // getResume();
  }, []);
  const { data, isLoading, error } = useQuery('getResume', () => fetchData(ApiEndpoint.getExperiencesPath()));
  useEffect(() => {
    console.log(data, isLoading, error);
  }, [data, isLoading]);
  //  id = experiences && experiences.length > 0 && experiences.length;
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
      <DataWrapper data={data?.listExperiences} isLoading={isLoading} error={error}>
        <>
          <ListExperience edit={edit} listExperience={data?.listExperiences} />
        </>
      </DataWrapper>
    </>
  );
};

export default ResumePage;
