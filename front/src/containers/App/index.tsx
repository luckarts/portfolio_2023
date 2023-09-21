/**
 *
 * App.ts
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { useEffect, useState, Suspense } from 'react';

import { Helmet } from 'react-helmet';
//import ReactGA from 'react-ga';

import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { publicRoutes } from 'routes/publicRoutes';
import { privateRoutes } from 'routes/privateRoutes';
import { useTranslation } from 'react-i18next';
import LoadingIndicator from 'components/LoadingIndicator';
import Preloader from 'containers/Home';
import CookieService from 'services/cookie.service';
import MiddlewareLanguage from './MiddlewareLanguage';
import { Notification, useNotification } from 'src/contexts';
export default function App() {
  const { t, ready } = useTranslation();
  const { notifications } = useNotification();

  const [isPreloaded, setIsPreloaded] = useState(false);
  //const TRACKING_ID = "UA-XXXXX-X"; / / OUR_TRACKING_ID;
  //ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    if (!CookieService.checkCookieExists('preaload')) {
      CookieService.setCookie('preaload', true, 1800);
    } else {
      // dispatch(setTab(1));
      setIsPreloaded(true);
    }
    return () => {
      CookieService.deleteCookie('preaload');
    };
  }, []);
  if (!ready) return <LoadingIndicator className="bg-primary" />;
  if (!isPreloaded) return <Preloader />;

  return (
    <div data-theme="dark">
      <Helmet titleTemplate="%s - Boileurplate">
        <meta name="description" content="Truthy CMS" />
      </Helmet>
      <>
        <div className="min-h-screen sm:mb-4  relative">
          <Router>
            <MiddlewareLanguage>
              <Suspense fallback={<LoadingIndicator className="bg-primary h-screen" />}>
                <Navbar />
                {notifications && <Notification />}

                <Routes>
                  {publicRoutes.map(({ path, element }, id) => (
                    <Route path={`:lang` + t(path, { ns: 'routes' })} element={element} key={id} />
                  ))}
                  {privateRoutes.map(({ path, element }, id) => (
                    <Route path={`:lang` + t(path, { ns: 'routes' })} element={element} key={id} />
                  ))}
                  <Route path="*" element={<Navigate to={`fr` + t('/notfound', { ns: 'routes' })} />} />
                </Routes>
                <Footer />
              </Suspense>
            </MiddlewareLanguage>
          </Router>
        </div>
      </>
    </div>
  );
}
