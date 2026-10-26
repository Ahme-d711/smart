"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import RobotScene from "../hero/robot-scene";
import ServicesSection from "../services/services-section";
import PortfolioSection from "../portfolio/portfolio-section";
import ProcessSection from "../process/process-section";
import ContactSection from "../contact/contact-section";
import AboutSection from "../about/about-section";
import BenefitsSection from "../benefits/benefits-section";
import { Arrow } from "../../components/shared/arrow";
import SiteHeader from "../../components/layout/site-header";

type LandingContent = { ar: { nav: readonly string[]; title: string; badge: string; intro: string; primary: string; secondary: string; metrics: readonly (readonly string[])[]; servicesEyebrow: string; servicesTitle: string; servicesIntro: string; services: readonly (readonly string[])[]; workEyebrow: string; workTitle: string; work: readonly (readonly string[])[]; processEyebrow: string; processTitle: string; steps: readonly (readonly string[])[]; contactEyebrow: string; contactTitle: string; contactIntro: string; name: string; email: string; message: string; send: string; footer: string; switch: string; discover: string; viewWork: string; freeConsultation: string; formError: string; formSending: string; formSent: string; robotLabel: string; robotFallback: string } };

export default function Home() {
  const locale = useLocale() as "ar" | "en";
  const translate = useTranslations("landing");
  const site = useTranslations("site");
  const about = useTranslations("about");
  const benefits = useTranslations("benefits");
  const lang = locale; const [sent, setSent] = useState(false); const [error, setError] = useState(false); const [sending, setSending] = useState(false); const t = translate.raw("content") as LandingContent["ar"]; const isAr = lang === "ar";
  const submit = async (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setError(false); setSending(true); const form = e.currentTarget; try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) }); if (response.ok) { setSent(true); form.reset(); } else setError(true); } catch { setError(true); } finally { setSending(false); } };
  return <main dir={isAr ? "rtl" : "ltr"} className="site-shell bg-background text-foreground">
    <SiteHeader />
    <section id="top" className="hero container !grid !min-h-[760px] !grid-cols-[1.03fr_.97fr] !gap-8 max-md:!flex max-md:!min-h-0"><motion.div className="hero-copy" initial={{ opacity: 0, x: isAr ? 28 : -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}><div className="eyebrow"><span className="pulse" />{t.badge}</div><h1 style={{ whiteSpace: "normal", fontFamily: isAr ? '"Noto Sans Arabic", sans-serif' : undefined, fontWeight: isAr ? 500 : undefined, fontKerning: "normal", display: "flex", flexDirection: "column", gap: isAr ? "0.45em" : "0" }} className={`!text-[clamp(38px,4.6vw,64px)] ${isAr ? "!leading-[1.35] !tracking-normal" : "!leading-[1.08] !tracking-[-2px]"}`}>{t.title.split("\n").map((line, i) => <span key={line} style={{ display: "block", whiteSpace: "nowrap", marginBottom: 0 }} className={i === 1 ? "gradient-text" : ""}>{line}</span>)}</h1><p className="!max-w-[500px] !text-[17px] !leading-8">{t.intro}</p><div className="hero-actions flex flex-wrap gap-3.5"><a className="button button-primary inline-flex items-center gap-3" href="#contact">{t.primary} <Arrow /></a><a className="button button-ghost inline-flex items-center gap-3" href="#services">{t.secondary} <span aria-hidden="true">↓</span></a></div><div className="metrics flex gap-10">{t.metrics.map(([num, label]) => <div className="metric flex flex-col gap-1.5" key={label}><strong>{num}</strong><span>{label}</span></div>)}</div></motion.div><motion.div className="hero-art" aria-label={t.robotLabel} initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }}><div className="orb orb-one" /><div className="orb orb-two" /><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="core"><RobotScene fallback={t.robotFallback} /></div><div className="float-card card-top">✦ <span>AI / 2025</span></div><div className="float-card card-bottom"><i /> Smart systems<br /><small>for human ambition</small></div></motion.div></section>
    <AboutSection copy={{ eyebrow: about("eyebrow"), title: about("title"), body: about("body") }} />
    <BenefitsSection copy={{ items: benefits.raw("items") as readonly (readonly string[])[] }} />
    <ServicesSection copy={{ eyebrow: t.servicesEyebrow, title: t.servicesTitle, intro: t.servicesIntro, items: t.services, discover: t.discover }} />
    <PortfolioSection copy={{ eyebrow: t.workEyebrow, title: t.workTitle, viewWork: t.viewWork, viewHref: `/${lang}/portfolio`, items: t.work.slice(0, 4) }} />
    <ProcessSection copy={{ eyebrow: t.processEyebrow, title: t.processTitle, steps: t.steps }} />
    <ContactSection copy={{ eyebrow: t.contactEyebrow, title: t.contactTitle, intro: t.contactIntro, freeConsultation: t.freeConsultation, name: t.name, email: t.email, message: t.message, formError: t.formError, formSending: t.formSending, formSent: t.formSent, send: t.send }} error={error} sending={sending} sent={sent} onSubmit={submit} />
    <footer className="footer bg-deep py-7"><div className="container footer-inner mx-auto flex items-center justify-between gap-5"><a className="brand" href="#top"><Image src="/logo.png" alt={site("title")} width={132} height={44} /></a><p>{t.footer}</p><span>© 2026 SmartAI</span></div></footer>
  </main>;
}


