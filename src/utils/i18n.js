import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import translationSV from "../locales/sv.json";
import translationEN from "../locales/en.json";
i18n.use(initReactI18next).init({
  resources: {
    sv: { translation: translationSV },
    en: { translation: translationEN },
  },
  lng: "sv",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
