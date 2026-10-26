import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "../globals.css";

export function generateStaticParams() { return routing.locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === "en";
  return { title: isEnglish ? "SmartAI — Intelligence that moves business forward" : "SmartAI — نبني الذكاء الذي يدفع أعمالك للأمام", description: isEnglish ? "SmartAI builds intelligent digital products and AI solutions." : "SmartAI تبني حلولاً رقمية ذكية تجمع بين البرمجيات والذكاء الاصطناعي.", alternates: { canonical: `/${locale}`, languages: { ar: "/ar", en: "/en", "x-default": "/ar" } }, openGraph: { locale: isEnglish ? "en_US" : "ar_EG", type: "website" } };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();
  return <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className="min-h-full"><NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider></div>;
}
