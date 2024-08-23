import { LocaleTypes } from "@/shared/constants.ts";

export const saveLanguageToStorage = (lang: LocaleTypes) => {
  localStorage.setItem("lang", lang);
};

export const getLanguageFromStorage = () => {
  const lang = localStorage.getItem("lang");
  return lang || LocaleTypes.EN;
};
