import { Arrow } from "../../components/shared/arrow";
import AnimatedReveal from "../../components/shared/animated-reveal";

export default function ServicesSection({ copy }: { copy: { eyebrow: string; title: string; intro: string; items: readonly (readonly string[])[]; discover: string } }) {
  return <section id="services" className="section container"><AnimatedReveal className="section-head"><div><div className="eyebrow">{copy.eyebrow}</div><h2>{copy.title}</h2></div><p>{copy.intro}</p></AnimatedReveal><div className="service-grid">{copy.items.map(([num, title, desc], i) => <AnimatedReveal className={`service-${i + 1}`} delay={i * 0.1} key={num}><article className={`service-card service-${i + 1}`}><span className="service-num">{num}</span><div className="service-icon">{["⌘", "✦", "◌"][i]}</div><h3>{title}</h3><p>{desc}</p><a href="#contact" aria-label={title}>{copy.discover} <Arrow /></a></article></AnimatedReveal>)}</div></section>;
}
