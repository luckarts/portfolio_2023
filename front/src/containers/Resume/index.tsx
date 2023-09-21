import { Helmet } from 'react-helmet';
import ListExperience from './ListExperiences';
import BannerUser from 'containers/UserPage';
import { Button, Typography } from 'src/components';
import { GetUserProfile, getExperiences } from 'utils/api';
import { RecordProvider, useAdmin } from 'src/contexts';

const ResumePage = () => {
  const { isAdmin } = useAdmin();

  return (
    <>
      <Helmet>
        <title>...::: Bachelart.fr :::... Luc Bachelerie</title>
        <meta property="og:title" content="Luc Bachelerie"></meta>
        <meta property="og:url" content="https://bachelart.fr/luc_bachelerie"></meta>
      </Helmet>
      <div className="wrapper_title ">
        <Typography
          variante="h2"
          className="text-center title z-10 relative text-white afterTitle animation-FadeUp animation-once"
        >
          À propos
        </Typography>
        <div className="mask_bg"></div>
      </div>

      <RecordProvider name="UserProfile" callback={() => GetUserProfile()}>
        <BannerUser name="UserProfile" />
      </RecordProvider>
      {isAdmin && (
        <Button variante="link" addIcon href={`/experience/new`} className="link">
          Ajoutez de nouvelles Experiences
        </Button>
      )}
      {isAdmin && (
        <Button variante="link" editIcon href="/edit/experience" className="link">
          Gerer mes experiences
        </Button>
      )}
      <RecordProvider name="getResume" callback={() => getExperiences()}>
        <ListExperience />
      </RecordProvider>
    </>
  );
};

export default ResumePage;
