import React, { useState, useEffect } from 'react';
import { I18nContext } from './I18nContext';
import i18n from 'i18next';

export const I18nContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (i18n.language) {
      setLanguage(i18n.language);
    }
  }, [i18n.language]);
  return <I18nContext.Provider value={{ language, setLanguage }}>{children}</I18nContext.Provider>;
};
