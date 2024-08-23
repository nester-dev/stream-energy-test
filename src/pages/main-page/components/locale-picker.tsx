import { FC } from "react";
import { useTranslation } from "react-i18next";
import RussianLocale from "../../../../public/icons/locales/russian.svg";
import EnglishLocale from "../../../../public/icons/locales/english.svg";
import Toggle from "@/components/ui/toggle.tsx";
import { LocaleTypes } from "@/shared/constants.ts";
import {
  getLanguageFromStorage,
  saveLanguageToStorage,
} from "@/utils/language-storage.ts";
import i18n from "@/i18n";

type Props = {
  showTitle?: boolean;
};

const LocalePicker: FC<Props> = ({ showTitle = true }) => {
  const { t } = useTranslation("translations");
  const isChecked = getLanguageFromStorage() === LocaleTypes.EN;

  const handleLocaleChange = (locale: LocaleTypes) => {
    saveLanguageToStorage(locale);
    i18n.changeLanguage(locale);
  };

  return (
    <div className="mt-3 flex items-center gap-2">
      {showTitle && <p className="flex-grow">{t("home-page.locale")} 👉</p>}
      <div className="flex h-6 gap-1">
        <RussianLocale />
        <Toggle
          name="locale"
          defaultChecked={isChecked}
          onToggle={handleLocaleChange}
        />
        <EnglishLocale />
      </div>
    </div>
  );
};

export default LocalePicker;
