import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import HttpApi from 'i18next-http-backend';

const languages = ['en', 'fr'];

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: languages,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    debug: true,
    ns: ['common', 'routes'],
    defaultNS: 'common',
    detection: {
      order: ['path', 'navigator']
    },
    react: {
      useSuspense: false
    }
  });
// Gestionnaire d'erreur pour les traductions manquantes
i18n.on('failedLoading', (lng, ns, key) => {
  console.warn(`Traduction manquante pour la clé "${key}" dans la langue "${lng}" et le namespace "${ns}"`);
});
export default i18n;
