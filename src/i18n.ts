import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json" assert { type: "json" };
import dkTranslation from "./locales/dk.json" assert { type: "json" };

const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: systemLocale.startsWith("da") ? "dk" : "en",
  resources: {
    EN: { translation: enTranslation },
    DK: { translation: dkTranslation },
  },
});

export default i18n;
