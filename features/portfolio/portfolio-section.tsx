import { Arrow } from "../../components/shared/arrow";
import AnimatedReveal from "../../components/shared/animated-reveal";

export default function PortfolioSection({ copy }: { copy: { eyebrow: string; title: string; viewWork: string; items: readonly (readonly string[])[] } }) {
  return <section id="work" className="section work-section"><div className="container"><AnimatedReveal className="section-head"><div><div className="eyebrow">{copy.eyebrow}</div><h2>{copy.title}</h2></div><a className="text-link" href="#contact">{copy.viewWork} <Arrow /></a></AnimatedReveal><div className="work-grid">{copy.items.map(([name, title, tags], i) => <AnimatedReveal className={`work-${i + 1}`} delay={i * 0.1} key={name}><article className={`work-card work-${i + 1}`}><div className="work-visual"><div className="visual-lines" /><span className="project-mark">{name}</span><span className="visual-chip">{i === 0 ? "✦ AI" : i === 1 ? "◒ FINANCE" : "◉ SYSTEMS"}</span></div><div className="work-meta"><div><h3>{title}</h3><p>{tags}</p></div><span className="circle-arrow"><Arrow /></span></div></article></AnimatedReveal>)}</div></div></section>;
}
