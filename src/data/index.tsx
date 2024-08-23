import Aries from "public/icons/signs/aries.svg";
import Taurus from "public/icons/signs/taurus.svg";
import Gemini from "public/icons/signs/gemini.svg";
import Cancer from "public/icons/signs/cancer.svg";
import Leo from "public/icons/signs/leo.svg";
import Virgo from "public/icons/signs/virgo.svg";
import Libra from "public/icons/signs/libra.svg";
import Scorpio from "public/icons/signs/scorpio.svg";
import Sagittarius from "public/icons/signs/sagittarius_1.svg";
import Capricorn from "public/icons/signs/capricorn.svg";
import Aquarius from "public/icons/signs/aquarius.svg";
import Pisces from "public/icons/signs/pisces.svg";
import { ZodiacSignsTypes } from "@/shared/types/signs.enum.ts";

export const zodiacSignsData = {
  [ZodiacSignsTypes.Aries]: {
    icon: <Aries />,
    period: "21.03-20.04",
  },

  [ZodiacSignsTypes.Taurus]: {
    icon: <Taurus />,
    period: "21.04-21.05",
  },

  [ZodiacSignsTypes.Gemini]: {
    icon: <Gemini />,
    period: "22.05-21.06",
  },

  [ZodiacSignsTypes.Cancer]: {
    icon: <Cancer />,
    period: "22.06-22.07",
  },

  [ZodiacSignsTypes.Leo]: {
    icon: <Leo />,
    period: "23.07-21.08",
  },

  [ZodiacSignsTypes.Virgo]: {
    icon: <Virgo />,
    period: "22.08-23.09",
  },

  [ZodiacSignsTypes.Libra]: {
    icon: <Libra />,
    period: "24.09-23.10",
  },

  [ZodiacSignsTypes.Scorpio]: {
    icon: <Scorpio />,
    period: "24.10-22.11",
  },

  [ZodiacSignsTypes.Sagittarius]: {
    icon: <Sagittarius />,
    period: "23.11-22.12",
  },

  [ZodiacSignsTypes.Capricorn]: {
    icon: <Capricorn />,
    period: "23.12-20.01",
  },

  [ZodiacSignsTypes.Aquarius]: {
    icon: <Aquarius />,
    period: "21.01-19.02",
  },

  [ZodiacSignsTypes.Pisces]: {
    icon: <Pisces />,
    period: "20.02-20.03",
  },
};
