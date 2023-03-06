/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React, { useEffect, Children } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { I18nextProvider } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { initI18n } from 'containers/LanguageProvider/actions';
import { useTranslation } from 'react-i18next';
import { makeSelectLanguage } from 'containers/LanguageProvider/selectors';
import { createStructuredSelector } from 'reselect';

export default function LanguageProvider({ children, i18n }) {
  const dispatch = useDispatch();
  const getinitI18n = () => dispatch(initI18n());
  const { ready } = useTranslation();

  useEffect(() => {
    if (ready) {
      getinitI18n();
    }
  }, [ready]);
  return <I18nextProvider i18n={i18n}>{Children.only(children)}</I18nextProvider>;
}

LanguageProvider.propTypes = {
  messages: PropTypes.object,
  children: PropTypes.element.isRequired
};
