import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json" assert { type: "json" };
import dkTranslation from "./locales/dk.json" assert { type: "json" };

const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

i18n
  .use(initReactI18next)
  .init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: { translation: enTranslation },
    dk: { translation: dkTranslation },
  },
});

export default i18n;
