import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import ar from "../messages/ar.json";
import en from "../messages/en.json";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = routing.locales.includes(requested as "ar" | "en") ? (requested as "ar" | "en") : routing.defaultLocale;
  return { locale, messages: locale === "en" ? en : ar };
});
