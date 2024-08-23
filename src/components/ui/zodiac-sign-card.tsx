import { FC } from "react";
import ArrowRight from "public/icons/arrow-right-line.svg";
import { useTranslation } from "react-i18next";
import { ZodiacSignsTypes } from "@/shared/types/signs.enum.ts";
import { zodiacSignsData } from "@/data";

type Props = {
  name: ZodiacSignsTypes;
};

const ZodiacSignCard: FC<Props> = ({ name }) => {
  const sign = zodiacSignsData[name];
  const { t } = useTranslation("translations");

  return (
    <div className="border-stroke bg-main_bg flex cursor-pointer gap-x-4 rounded-3xl border px-5 py-2">
      <div className="h-auto w-12 fill-[#464646]">{sign?.icon}</div>
      <div className="flex flex-col justify-around gap-y-1 text-sm">
        <p className="font-medium">
          {t("home-page.sign")}: {t(`signs.${name}`)}
        </p>
        <p className="text-gray-500">
          {t("home-page.period")}: {sign?.period}
        </p>
      </div>

      <span className="ml-auto self-center">
        <ArrowRight />
      </span>
    </div>
  );
};

export default ZodiacSignCard;
