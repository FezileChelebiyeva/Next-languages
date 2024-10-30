
const dictionaries: any = {
  az: () => import("@/dictionaries/az.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
