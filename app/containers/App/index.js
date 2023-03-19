/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import { getProfileAction } from 'containers/App/actions';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/App/reducer';
import { useInjectSaga } from 'utils/injectSaga';

import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';
import saga from 'containers/App/saga';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { publicRoutes } from 'routes/publicRoutes';
import { privateRoutes } from 'routes/privateRoutes';
import { useTranslation } from 'react-i18next';
import LoadingIndicator from 'components/LoadingIndicator';
import { history } from 'utils/history';
import Preloader from 'containers/Home';
import CookieService from 'services/cookie.service';
import { setTab } from 'containers/Swipeable/actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectLanguage } from 'containers/LanguageProvider/selectors';
import { useSelector } from 'react-redux';

const key = 'global';

const stateSelector = createStructuredSelector({
  language: makeSelectLanguage()
});

export default function App() {
  const { t, i18n, ready } = useTranslation();

  const dispatch = useDispatch();
  const getLoggedInUserProfile = () => dispatch(getProfileAction());
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  let { language } = useSelector(stateSelector);

  const [isPreloaded, setIsPreloaded] = useState(false);
  //const TRACKING_ID = "UA-XXXXX-X"; / / OUR_TRACKING_ID;
  //ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    getLoggedInUserProfile();
    if (!CookieService.checkCookieExists('preaload')) {
      CookieService.setCookie('preaload', true, 1800);
    } else {
      dispatch(setTab(1));
      setIsPreloaded(true);
    }
    return () => {
      CookieService.deleteCookie('preaload');
    };
  }, []);

  if (!ready) return <LoadingIndicator className="bg-primary" />;
  return (
    <div data-theme="dark">
      <Helmet titleTemplate="%s - Boileurplate">
        <meta name="description" content="Truthy CMS" />
      </Helmet>
      <>
        {!isPreloaded && <Preloader />}
        <div className="h-full xsl:pt-32 xs:pt-12 sm:mb-4 bg-gradient-t-default relative">
          <Router history={history}>
            <Navbar />
            <Suspense fallback={<LoadingIndicator className="bg-primary" />}>
              <Routes>
                {publicRoutes.map(({ path, element }, id) => (
                  <Route path={`:lang` + t(path, { ns: 'routes' })} element={element} key={id} />
                ))}
                {privateRoutes.map(({ path, element }, id) => (
                  <Route path={`:lang` + t(path, { ns: 'routes' })} element={element} key={id} />
                ))}
                <Route path="*" element={<Navigate to={language + t('/notfound', { ns: 'routes' })} />} />
              </Routes>
            </Suspense>
            <Footer />
          </Router>
        </div>
      </>
    </div>
  );
}
