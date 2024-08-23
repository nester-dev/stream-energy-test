import { instance } from "@/api/api.interceptor.ts";
import { UrlConfig } from "@/services/url.config.ts";
import { HttpMethods } from "@/api/methods.ts";
import {
  TranslationTypes,
  ZodiacSign,
  ZodiacSignsResponse,
} from "@/shared/types/zodiac-sign.interface.ts";

export const ZodiacSignService = {
  async getAll(translation: TranslationTypes) {
    return instance<ZodiacSignsResponse>({
      url: UrlConfig.HOROSCOPE,
      method: HttpMethods.POST,
      data: {
        language: translation,
        period: "today",
      },
    });
  },

  async getById({
    id,
    translation,
  }: {
    id: string;
    translation: TranslationTypes;
  }) {
    return instance<ZodiacSign>({
      url: UrlConfig.HOROSCOPE,
      method: HttpMethods.POST,
      data: {
        sign: id,
        language: translation,
        period: "today",
      },
    });
  },
};
