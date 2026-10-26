"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import RobotScene from "../hero/robot-scene";
import ServicesSection from "../services/services-section";
import PortfolioSection from "../portfolio/portfolio-section";
import ProcessSection from "../process/process-section";
import ContactSection from "../contact/contact-section";
import AboutSection from "../about/about-section";
import BenefitsSection from "../benefits/benefits-section";
import { Arrow } from "../../components/shared/arrow";

type LandingContent = { ar: { nav: readonly string[]; title: string; badge: string; intro: string; primary: string; secondary: string; metrics: readonly (readonly string[])[]; servicesEyebrow: string; servicesTitle: string; servicesIntro: string; services: readonly (readonly string[])[]; workEyebrow: string; workTitle: string; work: readonly (readonly string[])[]; processEyebrow: string; processTitle: string; steps: readonly (readonly string[])[]; contactEyebrow: string; contactTitle: string; contactIntro: string; name: string; email: string; message: string; send: string; footer: string; switch: string; discover: string; viewWork: string; freeConsultation: string; formError: string; formSending: string; formSent: string; robotLabel: string; robotFallback: string } };

export default function Home() {
  const locale = useLocale() as "ar" | "en";
  const router = useRouter();
  const translate = useTranslations("landing");
  const site = useTranslations("site");
  const about = useTranslations("about");
  const benefits = useTranslations("benefits");
  const lang = locale; const [menuOpen, setMenuOpen] = useState(false); const [sent, setSent] = useState(false); const [error, setError] = useState(false); const [sending, setSending] = useState(false); const t = translate.raw("content") as LandingContent["ar"]; const isAr = lang === "ar";
  const submit = async (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setError(false); setSending(true); const form = e.currentTarget; try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) }); if (response.ok) { setSent(true); form.reset(); } else setError(true); } catch { setError(true); } finally { setSending(false); } };
  return <main dir={isAr ? "rtl" : "ltr"} className="site-shell">
    <nav className="nav-wrap"><div className="nav container"><a className="brand" href="#top" aria-label="SmartAI home"><Image src="/logo.png" alt="SmartAI" width={140} height={47} priority /></a><div className={`nav-links ${menuOpen ? "open" : ""}`}>{t.nav.map((item, i) => <a href={["#top", "#services", "#work", "#approach"][i]} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}</div><div className="nav-actions"><button className="lang-switch" onClick={() => router.push(`/${isAr ? "en" : "ar"}`)}>{t.switch}</button><a className="nav-cta" href="#contact">{t.primary} <Arrow /></a><button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button></div></div></nav>
    <section id="top" className="hero container"><motion.div className="hero-copy" initial={{ opacity: 0, x: isAr ? 28 : -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}><div className="eyebrow"><span className="pulse" />{t.badge}</div><h1>{t.title.split("\n").map((line, i) => <span key={line} className={i === 1 ? "gradient-text" : ""}>{line}<br /></span>)}</h1><p>{t.intro}</p><div className="hero-actions"><a className="button button-primary" href="#contact">{t.primary} <Arrow /></a><a className="button button-ghost" href="#services">{t.secondary} <span aria-hidden="true">↓</span></a></div><div className="metrics">{t.metrics.map(([num, label]) => <div className="metric" key={label}><strong>{num}</strong><span>{label}</span></div>)}</div></motion.div><motion.div className="hero-art" aria-label={t.robotLabel} initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }}><div className="orb orb-one" /><div className="orb orb-two" /><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="core"><RobotScene fallback={t.robotFallback} /></div><div className="float-card card-top">✦ <span>AI / 2025</span></div><div className="float-card card-bottom"><i /> Smart systems<br /><small>for human ambition</small></div></motion.div></section>
    <AboutSection copy={{ eyebrow: about("eyebrow"), title: about("title"), body: about("body") }} />
    <BenefitsSection copy={{ items: benefits.raw("items") as readonly (readonly string[])[] }} />
    <ServicesSection copy={{ eyebrow: t.servicesEyebrow, title: t.servicesTitle, intro: t.servicesIntro, items: t.services, discover: t.discover }} />
    <PortfolioSection copy={{ eyebrow: t.workEyebrow, title: t.workTitle, viewWork: t.viewWork, items: t.work }} />
    <ProcessSection copy={{ eyebrow: t.processEyebrow, title: t.processTitle, steps: t.steps }} />
    <ContactSection copy={{ eyebrow: t.contactEyebrow, title: t.contactTitle, intro: t.contactIntro, freeConsultation: t.freeConsultation, name: t.name, email: t.email, message: t.message, formError: t.formError, formSending: t.formSending, formSent: t.formSent, send: t.send }} error={error} sending={sending} sent={sent} onSubmit={submit} />
    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#top"><Image src="/logo.png" alt={site("title")} width={132} height={44} /></a><p>{t.footer}</p><span>© 2026 SmartAI</span></div></footer>
  </main>;
}

