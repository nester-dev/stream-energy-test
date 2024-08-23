import { ZodiacSignsTypes } from "@/shared/types/signs.enum.ts";

export enum TranslationTypes {
  ORIGINAL = "original",
  TRANSLATED = "translated",
}

export type ZodiacSign = {
  horoscope: string;
  language: TranslationTypes;
  period: string;
  sign: ZodiacSignsTypes;
};

export type ZodiacSignsResponse = {
  horoscope: Record<ZodiacSignsTypes, string>;
  language: string;
  period: string;
};
