import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
// Languages
import English from "./lang/en";

// Set the key-value pairs for the different languages to support.
const i18n = new I18n({
  en: English,
});

// Set the locale once at the beginning of the app.
i18n.locale = Localization.locale;

i18n.defaultLocale = "en";

i18n.missingBehavior = "guess";

export default i18n;
