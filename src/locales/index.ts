import * as Localization from "expo-localization";
import i18n from "i18n-js";
// Languages
import English from "./lang/en";

// Set the key-value pairs for the different languages to support.
i18n.translations = {
  en: English,
};

// Set the locale once at the beginning of the app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default i18n;
