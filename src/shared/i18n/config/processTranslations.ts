interface ProcessTranslationsType {
  es: object;
  en?: object;
}

type KeyType = keyof object;

export const processTranslations = ({
  es,
  en,
}: ProcessTranslationsType): { es: object; en: object } => {
  const data = {
    es: mergeExistingKey(es),
    en: en != null ? mergeExistingKey(en) : {},
  };
  return data;
};

const mergeExistingKey = (translations: object): object => {
  let newTraslations = {} as any;

  for (const translate in translations) {
    Object.keys(translations[translate as KeyType]).forEach(key => {
      const value = translations[translate as KeyType][key];
      try {
        newTraslations[key] = {
          ...newTraslations[key],
          ...(value as object),
        };
      } catch {
        newTraslations = {
          ...newTraslations,
          ...(value as object),
        };
      }
    });
  }

  return newTraslations;
};
