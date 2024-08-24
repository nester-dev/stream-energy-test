import { FC, PropsWithChildren, useEffect } from "react";
import { useTelegram } from "@/hooks/useTelegram.ts";

const TelegramProvider: FC<PropsWithChildren> = ({ children }) => {
  const { tg } = useTelegram();

  useEffect(() => {
    if (tg) {
      tg.expand();
      tg.ready();
    }
  }, [tg]);

  return children;
};

export default TelegramProvider;
