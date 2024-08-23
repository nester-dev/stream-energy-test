import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "@twa-dev/sdk/react";
import { useTranslation } from "react-i18next";
import { useZodiacSignAPI } from "@/hooks/api/useZodiacSignAPI.ts";
import { zodiacSignsData } from "@/data";
import { ZodiacSignsTypes } from "@/shared/types/signs.enum.ts";
import LocalePicker from "@/pages/main-page/components/locale-picker.tsx";
import { RoutesPaths } from "@/routes/paths.config.ts";
import Spinner from "@/components/ui/spinner.tsx";

const ZodiacSignPage: FC = () => {
  const params = useParams<{ sign: ZodiacSignsTypes }>();
  const navigate = useNavigate();
  const { signById } = useZodiacSignAPI(params?.sign);
  const sign = params?.sign && zodiacSignsData[params.sign];
  const { t } = useTranslation("translations");

  if (signById.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-4">
      <BackButton onClick={() => navigate(RoutesPaths.HOME)} />

      <div className="flex items-center justify-between">
        <h1 className="text-end text-6xl capitalize">
          {t(`signs.${params.sign!}`)}
        </h1>
        <LocalePicker showTitle={false} />
      </div>
      <span className="mx-auto w-1/4">{sign?.icon}</span>
      <p>{signById.data?.horoscope}</p>
    </div>
  );
};

export default ZodiacSignPage;
