import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from '../languages/english.json';
import arabic from '../languages/arabic.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: english,
    ara: arabic,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
