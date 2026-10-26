"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Arrow } from "../shared/arrow";

type HeaderCopy = { nav: readonly string[]; primary: string; switch: string };

export default function SiteHeader() {
  const locale = useLocale();
  const router = useRouter();
  const translate = useTranslations("landing");
  const copy = translate.raw("content") as HeaderCopy;
  const isAr = locale === "ar";
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => { const current = window.scrollY; setVisible(current < 32 || current < previous); previous = current; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <header className={`portfolio-header nav-wrap ${visible ? "is-visible" : "is-hidden"}`}><div className="nav container"><a className="brand" href={`/${locale}`} aria-label="SmartAI home"><Image src="/logo.png" alt="SmartAI" width={140} height={47} priority /></a><nav className={`nav-links ${menuOpen ? "open" : ""}`}>{copy.nav.map((item, i) => <a key={item} href={[`/${locale}#top`, `/${locale}#services`, `/${locale}#work`, `/${locale}#approach`][i]} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav><div className="nav-actions"><button className="lang-switch" onClick={() => router.push(`/${isAr ? "en" : "ar"}`)}>{copy.switch}</button><a className="nav-cta" href={`/${locale}#contact`}>{copy.primary} <Arrow /></a><button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button></div></div></header>;
}

