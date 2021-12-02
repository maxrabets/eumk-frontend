import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "common/locales/en/translations.json";
import ruCommon from "common/locales/ru/translations.json";
import enAuth from "domains/auth/locales/en/translations.json";
import ruAuth from "domains/auth/locales/ru/translations.json";
import ruSubjects from "domains/subjects/locales/ru/translations.json";
import enSubjects from "domains/subjects/locales/en/translations.json";
import enUsers from "domains/users/locales/en/translations.json";
import ruUsers from "domains/users/locales/ru/translations.json";


const resources = {
  en: {
    common: enCommon,
    auth: enAuth,
    subjects: enSubjects,
    users: enUsers,
  },
  ru: {
    common: ruCommon,
    auth: ruAuth,
    subjects: ruSubjects,
    users: ruUsers,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
