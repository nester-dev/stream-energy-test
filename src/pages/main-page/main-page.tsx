import { FC } from "react";
import { useTranslation } from "react-i18next";
import LocalePicker from "./components/locale-picker.tsx";
import { useZodiacSignAPI } from "@/hooks/api/useZodiacSignAPI.ts";
import Spinner from "@/components/ui/spinner.tsx";
import HoroscopeList from "@/pages/main-page/components/horoscope-list.tsx";

const MainPage: FC = () => {
  const { signs } = useZodiacSignAPI();
  const { t } = useTranslation("translations");

  if (signs.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h1 className="text-center text-3xl font-semibold">
        {t("home-page.title")} {"\u2728"}
      </h1>
      <LocalePicker />
      <p className="mt-3 font-medium">{t("home-page.subtitle")} 👇</p>

      {signs?.data && <HoroscopeList data={signs?.data?.horoscope} />}
    </>
  );
};

export default MainPage;
