import WebApp from "@twa-dev/sdk";

export const telegram = WebApp;

export function useTelegram() {
  return {
    tg: telegram,
    language: telegram.initDataUnsafe.user?.language_code,
  };
}
