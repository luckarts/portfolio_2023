/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE, I18N_INIT } from 'containers/LanguageProvider/constants';
/**
 *
 * @returns {{type: string}}
 */
export function initI18n() {
  return {
    type: I18N_INIT
  };
}

export function setLanguage(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale
  };
}
