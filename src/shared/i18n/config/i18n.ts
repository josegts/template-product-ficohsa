import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { cloneDeep } from 'lodash';
import globals from './../translates/globals';

const apps: { [key in any]: { [lng in LanguageSupported]: object } } = {};

export type LanguageSupported = 'es' | 'en';
export type AppName = 'global'; // | 'honduras' | 'guatemala';

interface I18nInitProps {
  locale: LanguageSupported;
  app?: any;
}

const overwriteTranslationByApp = (app: keyof typeof apps): void => {
  try {
    const translate = apps[app];
    if (app === 'honduras' || app === 'guatemala') {
      overwriteTranslation('es', cloneDeep(globals.es));
      overwriteTranslation('en', cloneDeep(globals.en));
    }
    overwriteTranslation('es', translate.es);
    overwriteTranslation('en', translate.en);
  } catch {
    overwriteTranslation('es', globals.es);
    overwriteTranslation('en', globals.en);
  }
};

const overwriteTranslation = (lng: string, resources: object): void => {
  i18n.addResourceBundle(lng, 'translation', { ...resources }, true, true);
};

let i18nInitialApp = '';

export const i18nInit = ({ locale, app }: I18nInitProps): void => {
  if (i18n.isInitialized) {
    const languageHasChanged = i18n?.language !== locale;
    const appHasChanged = app !== i18nInitialApp;

    if (appHasChanged) {
      i18nInitialApp = app;
      overwriteTranslation('es', cloneDeep(globals.es));
      overwriteTranslation('en', cloneDeep(globals.en));
      if (app === 'honduras' || app === 'guatemala') {
        overwriteTranslation('es', cloneDeep(globals.es));
        overwriteTranslation('en', cloneDeep(globals.en));
      }
      overwriteTranslation('es', cloneDeep(apps[app]?.es));
      overwriteTranslation('en', cloneDeep(apps[app]?.en));
    }

    if (languageHasChanged) {
      setTimeout(() => {
        try {
          i18n
            .changeLanguage(locale)
            .then(() => {})
            .catch(() => {});
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error changing language');
        }
      }, 1);
    }

    return;
  }

  i18nInitialApp = app;

  i18n
    .use(initReactI18next)
    .init({
      fallbackLng: 'es',
      lng: locale,
      interpolation: {
        escapeValue: false,
      },
      resources: {
        es: {
          translation: cloneDeep(globals.es),
        },
        en: {
          translation: cloneDeep(globals.en),
        },
      },
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.error('Error initializing i18n');
    });

  overwriteTranslationByApp(app);
};
