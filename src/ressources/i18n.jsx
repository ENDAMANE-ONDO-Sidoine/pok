import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          welcome: "Welcome to React",
          // Ajoutez d'autres chaînes de traduction pour l'anglais ici
        }
      },
      fr: {
        translations: {
          welcome: "Bienvenue à React",
          // Ajoutez d'autres chaînes de traduction pour le français ici
        }
      },
      // Ajoutez d'autres langues ici
    },
    fallbackLng: "en",
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
