import { useEffect } from "react";
import { useTelegram } from "../hooks/useTelegram.ts";
import i18n from "@/i18n";
import { getLanguageFromStorage } from "@/utils/language-storage.ts";
import { LocaleTypes } from "@/shared/constants.ts";
import PageContainer from "@/components/layout/page-container.tsx";

const LanguageProvider = () => {
  const { language } = useTelegram();
  const userChosenLanguage = getLanguageFromStorage();

  useEffect(() => {
    i18n.changeLanguage(userChosenLanguage || language || LocaleTypes.EN);
  }, [language, userChosenLanguage]);

  return <PageContainer />;
};

export default LanguageProvider;
