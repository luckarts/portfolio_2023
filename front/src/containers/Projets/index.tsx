import { Helmet } from 'react-helmet';
import { Button, Typography } from 'src/components';
import { getProjets, getTags } from 'utils/api';
import ListTags from './ListTags';
import { useAdmin, RecordProvider } from 'src/contexts';
import ListProjects from './ListProjects';

const ProjectPage = () => {
  const { isAdmin } = useAdmin();

  return (
    <>
      <Helmet>
        <title>BachelArt</title>
        <meta property="og:title" content="BachelArt"></meta>
        <meta property="og:url" content="https://bachelart.fr"></meta>
        <meta name="description" content="Projets / React / PHP / Angular" />
      </Helmet>
      <div className="wrapper_title ">
        <Typography
          variante="h1"
          className="text-center title z-10 relative text-white afterTitle animation-FadeUp animation-once"
        >
          {isAdmin ? ' Edit projets' : 'Mes projets'}
        </Typography>
        <div className="mask_bg"></div>
      </div>
      {isAdmin && (
        <Button variante="link" addIcon className="addIcon link" href="/new">
          Ajout d'un nouveau projet
        </Button>
      )}
      <RecordProvider name="getTags" callback={() => getTags()}>
        <ListTags />
      </RecordProvider>

      <div style={{ minHeight: '500px' }}>
        <div className="max-w-screen-xl flex flex-wrap  mb-4 xs:mb-12 mx-auto md:p-12 sm:p-6 CardsDelay">
          <RecordProvider name="getProjets" callback={() => getProjets()}>
            <ListProjects name="getProjets" />
          </RecordProvider>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
