import AnimatedReveal from "../../components/shared/animated-reveal";

export default function ProcessSection({ copy }: { copy: { eyebrow: string; title: string; steps: readonly (readonly string[])[] } }) {
  return <section id="approach" className="section container approach"><AnimatedReveal className="approach-intro"><div className="eyebrow">{copy.eyebrow}</div><h2>{copy.title}</h2><div className="approach-line" /></AnimatedReveal><div className="steps">{copy.steps.map(([num, title, desc], i) => <AnimatedReveal delay={i * 0.1} key={num}><div className="step"><span>{num}</span><h3>{title}</h3><p>{desc}</p></div></AnimatedReveal>)}</div></section>;
}
