import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import french from './locales/fr.json';
import english from './locales/en.json';

const resources = {
  en: {
    translation: english
  },
  fr: {
    translation: french
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;