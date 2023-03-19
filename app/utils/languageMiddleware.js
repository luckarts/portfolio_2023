import { push } from 'redux-first-history';
import { I18N_INIT } from 'containers/LanguageProvider/constants';
import i18n from 'i18next';
import { setLanguage } from 'containers/LanguageProvider/actions';

const i18nMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    const defaultLanguage = getState().languageReducer.locale;

    if (action.type === I18N_INIT) {
      // Récupérer la langue active au démarrage de l'application
      const language = i18n.language.split('-')[0];
      // Mettre à jour le store de Redux avec la langue active
      dispatch(setLanguage(language));
    }
    if (action.type === '@@router/LOCATION_CHANGE') {
      const pathname = action.payload.location.pathname;
      const language = pathname.split('/')[1];
      const allowedLanguages = ['en', 'fr'];
      let newPathname = pathname.replace(`/${language}/`, '');
      if (newPathname.match(/^\/+$/)) {
        newPathname = '';
        dispatch(push(`/${defaultLanguage}${newPathname}/`));
      }
      if (!allowedLanguages.includes(language)) {
        dispatch(push(`/${defaultLanguage}${newPathname}/`));
      }

      return next(action);
    }

    return next(action);
  };

export default i18nMiddleware;
