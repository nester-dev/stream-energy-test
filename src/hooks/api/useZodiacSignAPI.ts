import { useQuery } from "@tanstack/react-query";
import { ZodiacSignService } from "@/services/zodiac-sign.service.ts";
import { LocaleTypes } from "@/shared/constants.ts";
import { TranslationTypes } from "@/shared/types/zodiac-sign.interface.ts";
import i18n from "@/i18n";

export const useZodiacSignAPI = (id?: string) => {
  const translation =
    i18n.language === LocaleTypes.EN
      ? TranslationTypes.TRANSLATED
      : TranslationTypes.ORIGINAL;

  const signs = useQuery({
    queryKey: ["zodiac signs", translation],
    queryFn: () => ZodiacSignService.getAll(translation),
    select: ({ data }) => data,
    staleTime: 5 * 60 * 1000,
  });

  const signById = useQuery({
    queryKey: ["zodiac sign", id, translation],
    queryFn: () => ZodiacSignService.getById({ id: id || "", translation }),
    select: ({ data }) => data,
    staleTime: 5 * 60 * 1000,
  });

  return { signs, signById };
};
